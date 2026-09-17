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
exports.BinsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const SEARCH_RESULTS_LIMIT = 10;
let BinsService = class BinsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(id) {
        const bin = await this.prisma.bin.findUnique({
            where: { id },
            include: {
                pallets: { include: { product: true } },
                scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 },
            },
        });
        if (!bin) {
            throw new common_1.NotFoundException(`Bin ${id} not found`);
        }
        const { scoreSnapshots, ...rest } = bin;
        const latestSnapshot = scoreSnapshots[0] ?? null;
        return {
            ...rest,
            score: latestSnapshot?.score ?? null,
            breakdown: latestSnapshot?.breakdown ?? null,
            scoreCalculatedAt: latestSnapshot?.calculatedAt ?? null,
        };
    }
    async search(q) {
        if (!q) {
            return [];
        }
        return this.prisma.bin.findMany({
            where: { code: { contains: q, mode: 'insensitive' } },
            orderBy: { code: 'asc' },
            take: SEARCH_RESULTS_LIMIT,
        });
    }
};
exports.BinsService = BinsService;
exports.BinsService = BinsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BinsService);
//# sourceMappingURL=bins.service.js.map