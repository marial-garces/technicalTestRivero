"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditPlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
let AuditPlansService = class AuditPlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(topN) {
        const bins = await this.prisma.bin.findMany({
            include: {
                scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 },
                auditTasks: { where: { status: client_1.TaskStatus.PENDING }, select: { id: true } },
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
                        status: client_1.TaskStatus.PENDING,
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
            pendingCount: auditTasks.filter((t) => t.status === client_1.TaskStatus.PENDING).length,
            doneCount: auditTasks.filter((t) => t.status === client_1.TaskStatus.DONE).length,
        }));
    }
    async findTasks(planId) {
        const plan = await this.prisma.auditPlan.findUnique({ where: { id: planId } });
        if (!plan) {
            throw new common_1.NotFoundException(`AuditPlan ${planId} not found`);
        }
        return this.prisma.auditTask.findMany({
            where: { auditPlanId: planId },
            include: { bin: true },
            orderBy: { createdAt: 'asc' },
        });
    }
};
exports.AuditPlansService = AuditPlansService;
exports.AuditPlansService = AuditPlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditPlansService);
//# sourceMappingURL=audit-plans.service.js.map