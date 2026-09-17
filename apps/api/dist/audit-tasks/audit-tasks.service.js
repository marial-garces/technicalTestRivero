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
exports.AuditTasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const scoring_service_1 = require("../scoring/scoring.service");
const client_1 = require("../generated/prisma/client");
let AuditTasksService = class AuditTasksService {
    constructor(prisma, scoringService) {
        this.prisma = prisma;
        this.scoringService = scoringService;
    }
    async findAll(status) {
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
    async findOne(id) {
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
            throw new common_1.NotFoundException(`AuditTask ${id} not found`);
        }
        const { scoreSnapshots, ...bin } = task.bin;
        return { ...task, bin: { ...bin, score: scoreSnapshots[0]?.score ?? null } };
    }
    async count(id, countedQuantity) {
        const task = await this.prisma.auditTask.findUnique({ where: { id } });
        if (!task) {
            throw new common_1.BadRequestException(`AuditTask ${id} not found`);
        }
        if (task.status !== client_1.TaskStatus.PENDING) {
            throw new common_1.BadRequestException(`AuditTask ${id} is not PENDING`);
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
                        type: client_1.MovementType.ADJUSTMENT,
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
                    status: client_1.TaskStatus.DONE,
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
};
exports.AuditTasksService = AuditTasksService;
exports.AuditTasksService = AuditTasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        scoring_service_1.ScoringService])
], AuditTasksService);
//# sourceMappingURL=audit-tasks.service.js.map