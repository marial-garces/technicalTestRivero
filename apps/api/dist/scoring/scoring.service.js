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
exports.ScoringService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
const SENTINEL_DAYS_SINCE_AUDIT = 999;
const MS_PER_DAY = 1000 * 60 * 60 * 24;
const WEIGHTS = {
    adjustments: 0.4,
    daysSinceAudit: 0.35,
    movements: 0.25,
};
let ScoringService = class ScoringService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async collectRawFactors(client) {
        const bins = await client.bin.findMany({
            select: { id: true, lastAuditedAt: true },
        });
        const movementCounts = await client.movement.groupBy({
            by: ['binId', 'type'],
            _count: { _all: true },
        });
        const countsByBin = new Map();
        for (const bin of bins) {
            countsByBin.set(bin.id, { movements: 0, adjustments: 0 });
        }
        for (const row of movementCounts) {
            const entry = countsByBin.get(row.binId);
            if (!entry)
                continue;
            if (row.type === client_1.MovementType.ADJUSTMENT) {
                entry.adjustments += row._count._all;
            }
            else {
                entry.movements += row._count._all;
            }
        }
        const now = Date.now();
        return bins.map((bin) => {
            const daysSinceAudit = bin.lastAuditedAt
                ? Math.floor((now - bin.lastAuditedAt.getTime()) / MS_PER_DAY)
                : SENTINEL_DAYS_SINCE_AUDIT;
            const counts = countsByBin.get(bin.id);
            return {
                binId: bin.id,
                daysSinceAudit,
                movements: counts.movements,
                adjustments: counts.adjustments,
            };
        });
    }
    normalize(values) {
        const min = Math.min(...values);
        const max = Math.max(...values);
        if (min === max) {
            return values.map(() => 50);
        }
        return values.map((value) => ((value - min) / (max - min)) * 100);
    }
    computeScores(rawFactors) {
        const daysSinceAuditNormalized = this.normalize(rawFactors.map((f) => f.daysSinceAudit));
        const movementsNormalized = this.normalize(rawFactors.map((f) => f.movements));
        const adjustmentsNormalized = this.normalize(rawFactors.map((f) => f.adjustments));
        return rawFactors.map((factors, i) => {
            const breakdown = {
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
            const score = breakdown.adjustments.normalized * breakdown.adjustments.weight +
                breakdown.daysSinceAudit.normalized * breakdown.daysSinceAudit.weight +
                breakdown.movements.normalized * breakdown.movements.weight;
            return { binId: factors.binId, score, breakdown };
        });
    }
    async recomputeAll(client = this.prisma) {
        const rawFactors = await this.collectRawFactors(client);
        const scores = this.computeScores(rawFactors);
        const calculatedAt = new Date();
        return client.scoreSnapshot.createManyAndReturn({
            data: scores.map((s) => ({
                binId: s.binId,
                score: s.score,
                breakdown: s.breakdown,
                calculatedAt,
            })),
            include: { bin: { select: { code: true } } },
        });
    }
    async recomputeOne(binId, client = this.prisma) {
        const rawFactors = await this.collectRawFactors(client);
        const scores = this.computeScores(rawFactors);
        const target = scores.find((s) => s.binId === binId);
        if (!target) {
            throw new common_1.NotFoundException(`Bin ${binId} not found`);
        }
        return client.scoreSnapshot.create({
            data: {
                binId: target.binId,
                score: target.score,
                breakdown: target.breakdown,
                calculatedAt: new Date(),
            },
            include: { bin: { select: { code: true } } },
        });
    }
};
exports.ScoringService = ScoringService;
exports.ScoringService = ScoringService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ScoringService);
//# sourceMappingURL=scoring.service.js.map