import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MovementType, Prisma } from '../generated/prisma/client';

const SENTINEL_DAYS_SINCE_AUDIT = 999;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const WEIGHTS = {
  adjustments: 0.4,
  daysSinceAudit: 0.35,
  movements: 0.25,
};

interface RawFactors {
  binId: string;
  daysSinceAudit: number;
  movements: number;
  adjustments: number;
}

interface FactorBreakdown {
  raw: number;
  normalized: number;
  weight: number;
}

interface ScoreBreakdown {
  adjustments: FactorBreakdown;
  daysSinceAudit: FactorBreakdown;
  movements: FactorBreakdown;
}

interface BinScore {
  binId: string;
  score: number;
  breakdown: ScoreBreakdown;
}

/** Any client capable of running the scoring queries: the app-wide PrismaService, or a `$transaction` callback client. */
type QueryClient = PrismaService | Prisma.TransactionClient;

@Injectable()
export class ScoringService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Collects the three raw scoring factors for every bin in the warehouse.
   * daysSinceAudit uses a 999-day sentinel for bins that have never been audited.
   */
  private async collectRawFactors(client: QueryClient): Promise<RawFactors[]> {
    const bins = await client.bin.findMany({
      select: { id: true, lastAuditedAt: true },
    });

    const movementCounts = await client.movement.groupBy({
      by: ['binId', 'type'],
      _count: { _all: true },
    });

    const countsByBin = new Map<string, { movements: number; adjustments: number }>();
    for (const bin of bins) {
      countsByBin.set(bin.id, { movements: 0, adjustments: 0 });
    }
    for (const row of movementCounts) {
      const entry = countsByBin.get(row.binId);
      if (!entry) continue;
      if (row.type === MovementType.ADJUSTMENT) {
        entry.adjustments += row._count._all;
      } else {
        entry.movements += row._count._all;
      }
    }

    const now = Date.now();

    return bins.map((bin) => {
      const daysSinceAudit = bin.lastAuditedAt
        ? Math.floor((now - bin.lastAuditedAt.getTime()) / MS_PER_DAY)
        : SENTINEL_DAYS_SINCE_AUDIT;
      const counts = countsByBin.get(bin.id)!;

      return {
        binId: bin.id,
        daysSinceAudit,
        movements: counts.movements,
        adjustments: counts.adjustments,
      };
    });
  }

  /**
   * Min-max normalization to a 0-100 scale.
   * If every bin has the same raw value (min === max), dividing by zero is
   * avoided by assigning 50 to all of them for that factor.
   */
  private normalize(values: number[]): number[] {
    const min = Math.min(...values);
    const max = Math.max(...values);

    if (min === max) {
      return values.map(() => 50);
    }

    return values.map((value) => ((value - min) / (max - min)) * 100);
  }

  private computeScores(rawFactors: RawFactors[]): BinScore[] {
    const daysSinceAuditNormalized = this.normalize(rawFactors.map((f) => f.daysSinceAudit));
    const movementsNormalized = this.normalize(rawFactors.map((f) => f.movements));
    const adjustmentsNormalized = this.normalize(rawFactors.map((f) => f.adjustments));

    return rawFactors.map((factors, i) => {
      const breakdown: ScoreBreakdown = {
        adjustments: {
          raw: factors.adjustments,
          normalized: adjustmentsNormalized[i],
          weight: WEIGHTS.adjustments,
        },
        daysSinceAudit: {
          raw: factors.daysSinceAudit,
          normalized: daysSinceAuditNormalized[i],
          weight: WEIGHTS.daysSinceAudit,
        },
        movements: {
          raw: factors.movements,
          normalized: movementsNormalized[i],
          weight: WEIGHTS.movements,
        },
      };

      const score =
        breakdown.adjustments.normalized * breakdown.adjustments.weight +
        breakdown.daysSinceAudit.normalized * breakdown.daysSinceAudit.weight +
        breakdown.movements.normalized * breakdown.movements.weight;

      return { binId: factors.binId, score, breakdown };
    });
  }

  /**
   * Recalculates raw factors + min/max across all bins and persists a new
   * ScoreSnapshot for every bin.
   *
   * `client` defaults to the app-wide PrismaService, but a `$transaction`
   * callback client can be passed to run this as part of a larger transaction.
   */
  async recomputeAll(client: QueryClient = this.prisma) {
    const rawFactors = await this.collectRawFactors(client);
    const scores = this.computeScores(rawFactors);
    const calculatedAt = new Date();

    return client.scoreSnapshot.createManyAndReturn({
      data: scores.map((s) => ({
        binId: s.binId,
        score: s.score,
        breakdown: s.breakdown as unknown as Prisma.InputJsonValue,
        calculatedAt,
      })),
      include: { bin: { select: { code: true } } },
    });
  }

  /**
   * Recalculates raw factors + min/max across ALL bins (so normalization
   * uses the correct global reference, see DESIGN.md decision #13), but only
   * persists a new ScoreSnapshot for the requested bin.
   *
   * `client` defaults to the app-wide PrismaService, but a `$transaction`
   * callback client can be passed to run this as part of a larger transaction
   * (e.g. the audit-task count flow).
   */
  async recomputeOne(binId: string, client: QueryClient = this.prisma) {
    const rawFactors = await this.collectRawFactors(client);
    const scores = this.computeScores(rawFactors);
    const target = scores.find((s) => s.binId === binId);

    if (!target) {
      throw new NotFoundException(`Bin ${binId} not found`);
    }

    return client.scoreSnapshot.create({
      data: {
        binId: target.binId,
        score: target.score,
        breakdown: target.breakdown as unknown as Prisma.InputJsonValue,
        calculatedAt: new Date(),
      },
      include: { bin: { select: { code: true } } },
    });
  }
}
