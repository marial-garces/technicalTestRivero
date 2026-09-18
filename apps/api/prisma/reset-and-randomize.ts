/**
 * TESTING / DEMO TOOL — not part of the MVP's production flow.
 *
 * Wipes Movement, ScoreSnapshot, AuditPlan and AuditTask, then regenerates a
 * fresh, randomized batch of activity (movements, adjustments, audit
 * history) against the EXISTING warehouse structure, so repeated runs give
 * varied scores/heatmaps without manually failing counts one by one.
 * Reuses prisma/seed-lib.ts (same 40/40/20 activity distribution as
 * prisma/seed.ts) instead of duplicating that logic. If the database is
 * completely empty, it bootstraps the structure first, exactly like
 * prisma/seed.ts would.
 *
 * A couple of bins are deliberately forced into a high-risk state (lots of
 * ADJUSTMENTs + a stale/null audit date) so the heatmap always has
 * something in the red zone to demo, even though the rest is random.
 *
 * Run with: npm run db:randomize -w apps/api
 */
import "reflect-metadata";
import { PrismaClient } from "../src/generated/prisma/client";
import { ScoringService } from "../src/scoring/scoring.service";
import type { PrismaService } from "../src/prisma/prisma.service";
import {
  clearActivity,
  createWarehouseStructure,
  fetchExistingStructure,
  generateMovementsAndAudits,
  randomInt,
  shuffle,
} from "./seed-lib";

const prisma = new PrismaClient();

const FORCED_HIGH_RISK_MIN = 2;
const FORCED_HIGH_RISK_MAX = 3;

async function main() {
  await clearActivity(prisma);

  let structure = await fetchExistingStructure(prisma);
  if (!structure) {
    console.log(
      "No hay estructura todavía — creándola desde cero (misma lógica que seed.ts)...",
    );
    const created = await createWarehouseStructure(prisma);
    structure = { bins: created.bins, palletsByBin: created.palletsByBin };
  }

  const { bins, palletsByBin } = structure;

  const forcedCount = randomInt(FORCED_HIGH_RISK_MIN, FORCED_HIGH_RISK_MAX);
  const forcedHighRiskBinIds = shuffle(bins)
    .slice(0, forcedCount)
    .map((bin) => bin.id);

  const activity = await generateMovementsAndAudits(prisma, bins, palletsByBin, {
    forcedHighRiskBinIds,
  });

  // Reuses the real ScoringService (no reimplementation of the scoring
  // formula) — constructed directly since this script runs outside Nest's
  // DI container. Our plain PrismaClient stands in for PrismaService: the
  // service only ever calls plain Prisma query methods on it.
  const scoringService = new ScoringService(prisma as unknown as PrismaService);
  const snapshots = await scoringService.recomputeAll();

  const forcedSummaries = snapshots
    .filter((s) => forcedHighRiskBinIds.includes(s.binId))
    .map((s) => `${s.bin.code}: ${s.score.toFixed(1)}`);

  const topScores = [...snapshots]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((s) => `${s.bin.code}: ${s.score.toFixed(1)}`);

  console.log("\n--- Randomize summary ---");
  console.log(`Bins: ${bins.length}`);
  console.log(`Movements (PICK/PUTAWAY/MOVE): ${activity.totalMovements}`);
  console.log(`Movements (ADJUSTMENT): ${activity.totalAdjustments}`);
  console.log(
    `Activity levels: tranquilo=${activity.activityCounts.tranquilo}, moderado=${activity.activityCounts.moderado}, caliente=${activity.activityCounts.caliente}`,
  );
  console.log(`Bins never audited: ${activity.neverAuditedCount} / ${bins.length}`);
  console.log(`Bins forzados a riesgo alto: ${forcedSummaries.join(", ")}`);
  console.log(`Scores recalculados: ${snapshots.length} snapshots creados`);
  console.log(`Top 5 scores: ${topScores.join(" | ")}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
