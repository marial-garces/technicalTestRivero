import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TaskStatus } from '../generated/prisma/client';

@Injectable()
export class AuditPlansService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Ranks all bins by their latest score (bins with no snapshot yet sort
   * last), excludes bins that already have a PENDING task in any plan, and
   * creates a plan with tasks for the top N eligible bins. If fewer than N
   * bins are eligible, the plan is created with whatever is available.
   */
  async create(topN: number) {
    const bins = await this.prisma.bin.findMany({
      include: {
        scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 },
        auditTasks: { where: { status: TaskStatus.PENDING }, select: { id: true } },
      },
    });

    const eligibleBinIds = bins
      .filter((bin) => bin.auditTasks.length === 0)
      .map((bin) => ({
        id: bin.id,
        score: bin.scoreSnapshots[0]?.score ?? -Infinity,
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topN)
      .map((bin) => bin.id);

    return this.prisma.$transaction(async (tx) => {
      const plan = await tx.auditPlan.create({ data: { topN } });

      if (eligibleBinIds.length > 0) {
        await tx.auditTask.createMany({
          data: eligibleBinIds.map((binId) => ({
            auditPlanId: plan.id,
            binId,
            status: TaskStatus.PENDING,
          })),
        });
      }

      return tx.auditPlan.findUniqueOrThrow({
        where: { id: plan.id },
        include: { auditTasks: { include: { bin: true } } },
      });
    });
  }

  async findAll() {
    const plans = await this.prisma.auditPlan.findMany({
      include: { auditTasks: { select: { status: true } } },
      orderBy: { createdAt: 'desc' },
    });

    return plans.map(({ auditTasks, ...plan }) => ({
      ...plan,
      pendingCount: auditTasks.filter((t) => t.status === TaskStatus.PENDING).length,
      doneCount: auditTasks.filter((t) => t.status === TaskStatus.DONE).length,
    }));
  }

  async findTasks(planId: string) {
    const plan = await this.prisma.auditPlan.findUnique({ where: { id: planId } });
    if (!plan) {
      throw new NotFoundException(`AuditPlan ${planId} not found`);
    }

    const tasks = await this.prisma.auditTask.findMany({
      where: { auditPlanId: planId },
      include: {
        bin: {
          include: { scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 } },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    return tasks.map((task) => {
      const { scoreSnapshots, ...bin } = task.bin;
      return { ...task, bin: { ...bin, score: scoreSnapshots[0]?.score ?? null } };
    });
  }
}
