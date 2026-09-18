/**
 * Shared logic between prisma/seed.ts (full reset, used for the initial
 * dataset) and prisma/reset-and-randomize.ts (testing/demo tool to
 * regenerate just the "activity" data). Keeping this in one place avoids
 * the two scripts drifting apart.
 */
import {
  PrismaClient,
  MovementType,
} from "../src/generated/prisma/client";

export const TARGET_BINS = 30;
export const DAYS_IN_MONTH = 30;
export const DAYS_IN_AUDIT_WINDOW = 60;
/** Fixed (not random) adjustment count for forced high-risk bins — see generateMovementsAndAudits. */
export const FORCED_ADJUSTMENT_COUNT = 10;

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function daysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(randomInt(0, 23), randomInt(0, 59), randomInt(0, 59));
  return date;
}

export function randomDateWithinDays(maxDays: number): Date {
  return daysAgo(Math.random() * maxDays);
}

/** Splits `total` into `buckets` positive integers (each >=1, <=max), summing to `total`. */
export function distributeSum(total: number, buckets: number, max: number): number[] {
  const sizes = new Array(buckets).fill(1);
  let remaining = total - buckets;
  while (remaining > 0) {
    const idx = randomInt(0, buckets - 1);
    if (sizes[idx] < max) {
      sizes[idx]++;
      remaining--;
    }
  }
  return sizes;
}

export const PRODUCT_CATALOG: { sku: string; name: string }[] = [
  { sku: "CER-MAIZ-A", name: "Cereal de Maíz Marca A" },
  { sku: "CER-AVENA-B", name: "Cereal de Avena Marca B" },
  { sku: "CER-TRIGO-C", name: "Cereal de Trigo Marca C" },
  { sku: "CER-ARROZ-D", name: "Cereal de Arroz Marca D" },
  { sku: "CER-MIEL-F", name: "Cereal con Miel Marca F" },
  { sku: "CER-CHOC-G", name: "Cereal de Chocolate Marca G" },
  { sku: "CER-INTEGRAL-E", name: "Cereal Integral Marca E" },
  { sku: "ATUN-ACEITE-A", name: "Atún Enlatado Marca A" },
  { sku: "ATUN-AGUA-E", name: "Atún en Agua Marca E" },
  { sku: "SARDINA-B", name: "Sardinas Enlatadas Marca B" },
  { sku: "SALMON-C", name: "Salmón Enlatado Marca C" },
  { sku: "CAMARON-D", name: "Camarones Enlatados Marca D" },
  { sku: "MAIZ-DULCE-C", name: "Maíz Dulce Enlatado Marca C" },
  { sku: "FRIJOL-D", name: "Frijoles Enlatados Marca D" },
  { sku: "CHICHARO-B", name: "Chícharos Enlatados Marca B" },
  { sku: "DURAZNO-A", name: "Duraznos en Almíbar Marca A" },
  { sku: "TOMATE-PURE-A", name: "Puré de Tomate Enlatado Marca A" },
  { sku: "LECHE-EVAP-E", name: "Leche Evaporada Enlatada Marca E" },
];

export type ActivityLevel = "tranquilo" | "moderado" | "caliente";

export const ACTIVITY_RANGES: Record<ActivityLevel, [number, number]> = {
  tranquilo: [5, 15],
  moderado: [15, 28],
  caliente: [28, 40],
};

/** Assigns each bin a random activity level, respecting the 40/40/20 tranquilo/moderado/caliente split. */
export function buildActivityLevels(binCount: number): ActivityLevel[] {
  const tranquiloCount = Math.round(binCount * 0.4);
  const moderadoCount = Math.round(binCount * 0.4);
  const calienteCount = binCount - tranquiloCount - moderadoCount;

  const levels: ActivityLevel[] = [
    ...Array(tranquiloCount).fill("tranquilo"),
    ...Array(moderadoCount).fill("moderado"),
    ...Array(calienteCount).fill("caliente"),
  ];

  return shuffle(levels);
}

export interface Bin {
  id: string;
  code: string;
}

export type PalletsByBin = Map<string, { id: string }[]>;

export async function clearDatabase(prisma: PrismaClient) {
  await prisma.auditTask.deleteMany();
  await prisma.auditPlan.deleteMany();
  await prisma.scoreSnapshot.deleteMany();
  await prisma.movement.deleteMany();
  await prisma.pallet.deleteMany();
  await prisma.product.deleteMany();
  await prisma.bin.deleteMany();
  await prisma.rack.deleteMany();
  await prisma.aisle.deleteMany();
  await prisma.warehouse.deleteMany();
}

/** Wipes only the "activity" tables — Movement, ScoreSnapshot, AuditPlan, AuditTask — leaving the physical structure (Warehouse/Aisle/Rack/Bin/Product/Pallet) untouched. */
export async function clearActivity(prisma: PrismaClient) {
  await prisma.auditTask.deleteMany();
  await prisma.auditPlan.deleteMany();
  await prisma.scoreSnapshot.deleteMany();
  await prisma.movement.deleteMany();
}

/**
 * Creates the organic warehouse structure (aisles/racks/bins, sized
 * unevenly), the product catalog, and 0-4 random pallets per bin.
 */
export async function createWarehouseStructure(
  prisma: PrismaClient,
): Promise<{ bins: Bin[]; palletsByBin: PalletsByBin; totalPallets: number }> {
  const warehouse = await prisma.warehouse.create({
    data: { name: "Almacén Central" },
  });

  // Organic aisle/rack/bin structure: pick a rack count and split TARGET_BINS
  // across racks unevenly, then split those racks across an uneven number of aisles.
  const rackCount = randomInt(8, 12);
  const aisleCount = randomInt(4, 6);
  const binsPerRack = distributeSum(TARGET_BINS, rackCount, 6);
  const racksPerAisle = distributeSum(rackCount, aisleCount, 4);

  const bins: Bin[] = [];
  let rackCursor = 0;

  for (let a = 0; a < aisleCount; a++) {
    const aisleCode = `A${a + 1}`;
    const aisle = await prisma.aisle.create({
      data: { warehouseId: warehouse.id, code: aisleCode },
    });

    const racksInThisAisle = racksPerAisle[a];
    for (let r = 0; r < racksInThisAisle; r++) {
      const rackCode = `R${r + 1}`;
      const rack = await prisma.rack.create({
        data: { aisleId: aisle.id, code: rackCode },
      });

      const binsInThisRack = binsPerRack[rackCursor];
      rackCursor++;

      for (let b = 0; b < binsInThisRack; b++) {
        const binCode = `${aisleCode}-${rackCode}-B${String(b + 1).padStart(2, "0")}`;
        const bin = await prisma.bin.create({
          data: { rackId: rack.id, code: binCode },
        });
        bins.push({ id: bin.id, code: bin.code });
      }
    }
  }

  const products = await Promise.all(
    PRODUCT_CATALOG.map((p) => prisma.product.create({ data: p })),
  );

  const palletsByBin: PalletsByBin = new Map();
  let totalPallets = 0;

  for (const bin of bins) {
    const palletCount = randomInt(0, 4);
    const binPallets: { id: string }[] = [];
    for (let i = 0; i < palletCount; i++) {
      const product = pickRandom(products);
      const pallet = await prisma.pallet.create({
        data: {
          productId: product.id,
          binId: bin.id,
          quantity: randomInt(10, 200),
          createdAt: randomDateWithinDays(90),
        },
      });
      binPallets.push({ id: pallet.id });
    }
    palletsByBin.set(bin.id, binPallets);
    totalPallets += palletCount;
  }

  return { bins, palletsByBin, totalPallets };
}

/** Fetches the bins/pallets of the (single) existing warehouse, for tools that reuse the physical structure instead of recreating it. */
export async function fetchExistingStructure(
  prisma: PrismaClient,
): Promise<{ bins: Bin[]; palletsByBin: PalletsByBin } | null> {
  const bins = await prisma.bin.findMany({
    select: { id: true, code: true, pallets: { select: { id: true } } },
  });
  if (bins.length === 0) return null;

  const palletsByBin: PalletsByBin = new Map();
  for (const bin of bins) {
    palletsByBin.set(bin.id, bin.pallets);
  }

  return { bins: bins.map(({ id, code }) => ({ id, code })), palletsByBin };
}

export interface GenerateActivityOptions {
  /** Bin ids to force into a visibly high-risk state (many ADJUSTMENTs + a stale/null audit date), regardless of their randomly rolled activity level. Useful so a demo always has at least a few bins in the red zone. */
  forcedHighRiskBinIds?: string[];
}

export interface ActivitySummary {
  totalMovements: number;
  totalAdjustments: number;
  activityCounts: Record<ActivityLevel, number>;
  neverAuditedCount: number;
  forcedHighRiskCount: number;
}

/**
 * Generates Movements (PICK/PUTAWAY/MOVE + ADJUSTMENT) for every bin using
 * the 40/40/20 tranquilo/moderado/caliente distribution, and randomizes
 * Bin.lastAuditedAt. Bins listed in `forcedHighRiskBinIds` get an elevated
 * adjustment count and an old-or-null audit date instead of the normal
 * random assignment, so they reliably land at the top of the score ranking.
 */
export async function generateMovementsAndAudits(
  prisma: PrismaClient,
  bins: Bin[],
  palletsByBin: PalletsByBin,
  options: GenerateActivityOptions = {},
): Promise<ActivitySummary> {
  const forcedIds = new Set(options.forcedHighRiskBinIds ?? []);

  const activityLevels = buildActivityLevels(bins.length);
  const activityCounts: Record<ActivityLevel, number> = {
    tranquilo: 0,
    moderado: 0,
    caliente: 0,
  };

  let totalMovements = 0;
  let totalAdjustments = 0;

  for (let i = 0; i < bins.length; i++) {
    const bin = bins[i];
    const level = activityLevels[i];
    activityCounts[level]++;

    const binPallets = palletsByBin.get(bin.id) ?? [];
    const maybePalletId = () =>
      binPallets.length > 0 && Math.random() < 0.7
        ? pickRandom(binPallets).id
        : null;

    const [min, max] = ACTIVITY_RANGES[level];
    const total = randomInt(min, max);

    const pickCount = Math.round(total * 0.5);
    const putawayCount = Math.round(total * 0.3);
    const moveCount = total - pickCount - putawayCount;

    const movementsToCreate: { type: MovementType; count: number }[] = [
      { type: MovementType.PICK, count: pickCount },
      { type: MovementType.PUTAWAY, count: putawayCount },
      { type: MovementType.MOVE, count: moveCount },
    ];

    for (const { type, count } of movementsToCreate) {
      for (let j = 0; j < count; j++) {
        await prisma.movement.create({
          data: {
            binId: bin.id,
            palletId: maybePalletId(),
            type,
            quantity: randomInt(1, 20),
            occurredAt: randomDateWithinDays(DAYS_IN_MONTH),
          },
        });
        totalMovements++;
      }
    }

    // Adjustments: independent of the activity-level movement count.
    // Forced high-risk bins all get the SAME fixed high count (not a random
    // range): with several forced bins, an independent random draw per bin
    // (e.g. 6-10) doesn't guarantee any of them tie for the global max — only
    // whichever happened to roll highest gets normalized to 100, the rest
    // land partway up the scale. A shared fixed value guarantees every
    // forced bin ties for the max, so `adjustments` (40% of the score
    // weight) normalizes to 100 for all of them, not just one.
    const isForced = forcedIds.has(bin.id);
    const adjustmentCount = isForced ? FORCED_ADJUSTMENT_COUNT : randomInt(0, 3);
    for (let j = 0; j < adjustmentCount; j++) {
      await prisma.movement.create({
        data: {
          binId: bin.id,
          palletId: maybePalletId(),
          type: MovementType.ADJUSTMENT,
          quantity: randomInt(1, 20),
          occurredAt: randomDateWithinDays(DAYS_IN_MONTH),
        },
      });
      totalAdjustments++;
    }
  }

  // Audit history: 15% never audited (lastAuditedAt = null), rest scattered up to 60
  // days ago. Explicitly (re)set both groups — bins may carry a stale value from a
  // previous run when the structure is reused instead of recreated.
  const nonForcedBins = shuffle(bins.filter((bin) => !forcedIds.has(bin.id)));
  const neverAuditedCount = Math.round(bins.length * 0.15);
  const neverAuditedBins = nonForcedBins.slice(0, neverAuditedCount);
  const auditedBins = nonForcedBins.slice(neverAuditedCount);

  for (const bin of neverAuditedBins) {
    await prisma.bin.update({ where: { id: bin.id }, data: { lastAuditedAt: null } });
  }
  for (const bin of auditedBins) {
    await prisma.bin.update({
      where: { id: bin.id },
      data: { lastAuditedAt: randomDateWithinDays(DAYS_IN_AUDIT_WINDOW) },
    });
  }

  // Forced high-risk bins always go "never audited" (null -> the 999-day
  // sentinel). This is deliberate, not just the boldest option: the sentinel
  // is the global ceiling for daysSinceAudit, so these bins are guaranteed to
  // tie for the factor's max (normalized 100) no matter what the random
  // non-forced bins rolled. A "90-150 days ago" alternative would only be
  // guaranteed to win if no non-forced bin also happened to roll null —
  // which they can (15% chance each) — and lost that gamble in testing,
  // landing a forced bin in the medium zone instead of the intended red zone.
  for (const binId of forcedIds) {
    await prisma.bin.update({ where: { id: binId }, data: { lastAuditedAt: null } });
  }

  return {
    totalMovements,
    totalAdjustments,
    activityCounts,
    neverAuditedCount,
    forcedHighRiskCount: forcedIds.size,
  };
}
