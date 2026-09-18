import { WarehousesService } from './warehouses.service';
export declare class WarehousesController {
    private readonly warehousesService;
    constructor(warehousesService: WarehousesService);
    findAll(): Promise<{
        binCount: number;
        id: string;
        name: string;
        createdAt: Date;
    }[]>;
    getHeatmap(id: string): Promise<{
        id: string;
        name: string;
        aisles: {
            id: string;
            code: string;
            racks: {
                id: string;
                code: string;
                bins: {
                    score: number;
                    breakdown: import("@prisma/client/runtime/library").JsonValue;
                    scoreCalculatedAt: Date;
                    id: string;
                    createdAt: Date;
                    code: string;
                    rackId: string;
                    lastAuditedAt: Date | null;
                }[];
            }[];
        }[];
    }>;
}
