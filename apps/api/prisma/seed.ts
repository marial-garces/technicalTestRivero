import { PrismaClient, MovementType } from "../generated/prisma/client";

const prisma = new PrismaClient();

const TARGET_BINS = 30;
const DAYS_IN_MONTH = 30;
const DAYS_IN_AUDIT_WINDOW = 60;

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom<T>(arr: T[]): T {
  return arr[randomInt(0, arr.length - 1)];
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function daysAgo(days: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(randomInt(0, 23), randomInt(0, 59), randomInt(0, 59));
  return date;
}

function randomDateWithinDays(maxDays: number): Date {
  return daysAgo(Math.random() * maxDays);
}

/** Splits `total` into `buckets` positive integers (each >=1, <=max), summing to `total`. */
function distributeSum(total: number, buckets: number, max: number): number[] {
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

const PRODUCT_CATALOG: { sku: string; name: string }[] = [
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

type ActivityLevel = "tranquilo" | "moderado" | "caliente";

const ACTIVITY_RANGES: Record<ActivityLevel, [number, number]> = {
  tranquilo: [5, 15],
  moderado: [15, 28],
  caliente: [28, 40],
};

function buildActivityLevels(binCount: number): ActivityLevel[] {
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

async function clearDatabase() {
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

async function main() {
  await clearDatabase();

  const warehouse = await prisma.warehouse.create({
    data: { name: "Almacén Central" },
  });

  // Organic aisle/rack/bin structure: pick a rack count and split TARGET_BINS
  // across racks unevenly, then split those racks across an uneven number of aisles.
  const rackCount = randomInt(8, 12);
  const aisleCount = randomInt(4, 6);
  const binsPerRack = distributeSum(TARGET_BINS, rackCount, 6);
  const racksPerAisle = distributeSum(rackCount, aisleCount, 4);

  const bins: { id: string; code: string }[] = [];
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

  console.log(`Estructura: ${aisleCount} aisles, ${rackCount} racks, ${bins.length} bins`);

  // Products
  const products = await Promise.all(
    PRODUCT_CATALOG.map((p) => prisma.product.create({ data: p })),
  );

  // Pallets: 0-4 per bin, tracking which pallets belong to which bin for movement linking
  const palletsByBin = new Map<string, { id: string }[]>();
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

  // Movements: assign an activity level per bin first, then generate movements accordingly
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

    const movementsToCreate: {
      type: MovementType;
      count: number;
    }[] = [
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

    // Adjustments: independent of the activity-level movement count
    const adjustmentCount = randomInt(0, 3);
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

  // Audit history: 15% never audited (lastAuditedAt stays null), rest scattered up to 60 days ago
  const shuffledBins = shuffle(bins);
  const neverAuditedCount = Math.round(bins.length * 0.15);
  const auditedBins = shuffledBins.slice(neverAuditedCount);

  for (const bin of auditedBins) {
    await prisma.bin.update({
      where: { id: bin.id },
      data: { lastAuditedAt: randomDateWithinDays(DAYS_IN_AUDIT_WINDOW) },
    });
  }

  console.log("\n--- Seed summary ---");
  console.log(`Bins: ${bins.length}`);
  console.log(`Products: ${products.length}`);
  console.log(`Pallets: ${totalPallets}`);
  console.log(`Movements (PICK/PUTAWAY/MOVE): ${totalMovements}`);
  console.log(`Movements (ADJUSTMENT): ${totalAdjustments}`);
  console.log(`Total movements: ${totalMovements + totalAdjustments}`);
  console.log(
    `Activity levels: tranquilo=${activityCounts.tranquilo}, moderado=${activityCounts.moderado}, caliente=${activityCounts.caliente}`,
  );
  console.log(
    `Bins never audited (lastAuditedAt = null): ${neverAuditedCount} / ${bins.length}`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
