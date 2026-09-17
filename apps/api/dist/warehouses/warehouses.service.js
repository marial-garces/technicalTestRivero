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
exports.WarehousesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WarehousesService = class WarehousesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const warehouses = await this.prisma.warehouse.findMany({
            include: {
                aisles: { include: { racks: { include: { bins: { select: { id: true } } } } } },
            },
            orderBy: { createdAt: 'asc' },
        });
        return warehouses.map(({ aisles, ...warehouse }) => ({
            ...warehouse,
            binCount: aisles.reduce((sum, aisle) => sum + aisle.racks.reduce((rackSum, rack) => rackSum + rack.bins.length, 0), 0),
        }));
    }
    async getHeatmap(warehouseId) {
        const warehouse = await this.prisma.warehouse.findUnique({
            where: { id: warehouseId },
            include: {
                aisles: {
                    orderBy: { code: 'asc' },
                    include: {
                        racks: {
                            orderBy: { code: 'asc' },
                            include: {
                                bins: {
                                    orderBy: { code: 'asc' },
                                    include: {
                                        scoreSnapshots: {
                                            orderBy: { calculatedAt: 'desc' },
                                            take: 1,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!warehouse) {
            throw new common_1.NotFoundException(`Warehouse ${warehouseId} not found`);
        }
        return {
            id: warehouse.id,
            name: warehouse.name,
            aisles: warehouse.aisles.map((aisle) => ({
                id: aisle.id,
                code: aisle.code,
                racks: aisle.racks.map((rack) => ({
                    id: rack.id,
                    code: rack.code,
                    bins: rack.bins.map(({ scoreSnapshots, ...bin }) => {
                        const latest = scoreSnapshots[0] ?? null;
                        return {
                            ...bin,
                            score: latest?.score ?? null,
                            breakdown: latest?.breakdown ?? null,
                            scoreCalculatedAt: latest?.calculatedAt ?? null,
                        };
                    }),
                })),
            })),
        };
    }
};
exports.WarehousesService = WarehousesService;
exports.WarehousesService = WarehousesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WarehousesService);
//# sourceMappingURL=warehouses.service.js.map