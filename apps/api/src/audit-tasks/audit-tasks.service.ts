import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ScoringService } from '../scoring/scoring.service';
import { MovementType, TaskStatus } from '../generated/prisma/client';

@Injectable()
export class AuditTasksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly scoringService: ScoringService,
  ) {}

  async findAll(status?: TaskStatus) {
    const tasks = await this.prisma.auditTask.findMany({
      where: status ? { status } : undefined,
      include: {
        bin: {
          include: { scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return tasks.map((task) => {
      const { scoreSnapshots, ...bin } = task.bin;
      return { ...task, bin: { ...bin, score: scoreSnapshots[0]?.score ?? null } };
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.auditTask.findUnique({
      where: { id },
      include: {
        bin: {
          include: {
            pallets: { include: { product: true } },
            scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 },
          },
        },
      },
    });

    if (!task) {
      throw new NotFoundException(`AuditTask ${id} not found`);
    }

    const { scoreSnapshots, ...bin } = task.bin;
    return { ...task, bin: { ...bin, score: scoreSnapshots[0]?.score ?? null } };
  }

  /**
   * Completes a count against a PENDING task:
   * 1. task must exist and be PENDING (checked here, outside the transaction)
   * 2-7. expected quantity, pass/fail, an ADJUSTMENT movement on failure,
   *      Bin.lastAuditedAt, the task update, and a score recompute for the
   *      bin — all run atomically in a single transaction (step 8).
   */
  async count(id: string, countedQuantity: number) {
    const task = await this.prisma.auditTask.findUnique({ where: { id } });

    if (!task) {
      throw new BadRequestException(`AuditTask ${id} not found`);
    }
    if (task.status !== TaskStatus.PENDING) {
      throw new BadRequestException(`AuditTask ${id} is not PENDING`);
    }

    return this.prisma.$transaction(async (tx) => {
      const pallets = await tx.pallet.findMany({ where: { binId: task.binId } });
      const expectedQuantity = pallets.reduce((sum, pallet) => sum + pallet.quantity, 0);
      const passed = countedQuantity === expectedQuantity;
      const countedAt = new Date();

      if (!passed) {
        await tx.movement.create({
          data: {
            binId: task.binId,
            type: MovementType.ADJUSTMENT,
            quantity: countedQuantity - expectedQuantity,
            occurredAt: countedAt,
          },
        });
      }

      await tx.bin.update({
        where: { id: task.binId },
        data: { lastAuditedAt: countedAt },
      });

      const updatedTask = await tx.auditTask.update({
        where: { id },
        data: {
          status: TaskStatus.DONE,
          expectedQuantity,
          countedQuantity,
          passed,
          countedAt,
        },
      });

      const scoreSnapshot = await this.scoringService.recomputeOne(task.binId, tx);

      return { task: updatedTask, score: scoreSnapshot };
    });
  }
}
