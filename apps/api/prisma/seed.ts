import { PrismaClient } from "../src/generated/prisma/client";
import {
  clearDatabase,
  createWarehouseStructure,
  generateMovementsAndAudits,
  PRODUCT_CATALOG,
} from "./seed-lib";

const prisma = new PrismaClient();

async function main() {
  await clearDatabase(prisma);

  const { bins, palletsByBin, totalPallets } = await createWarehouseStructure(prisma);
  console.log(`Estructura: ${bins.length} bins creados`);

  const activity = await generateMovementsAndAudits(prisma, bins, palletsByBin);

  console.log("\n--- Seed summary ---");
  console.log(`Bins: ${bins.length}`);
  console.log(`Products: ${PRODUCT_CATALOG.length}`);
  console.log(`Pallets: ${totalPallets}`);
  console.log(`Movements (PICK/PUTAWAY/MOVE): ${activity.totalMovements}`);
  console.log(`Movements (ADJUSTMENT): ${activity.totalAdjustments}`);
  console.log(`Total movements: ${activity.totalMovements + activity.totalAdjustments}`);
  console.log(
    `Activity levels: tranquilo=${activity.activityCounts.tranquilo}, moderado=${activity.activityCounts.moderado}, caliente=${activity.activityCounts.caliente}`,
  );
  console.log(
    `Bins never audited (lastAuditedAt = null): ${activity.neverAuditedCount} / ${bins.length}`,
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
