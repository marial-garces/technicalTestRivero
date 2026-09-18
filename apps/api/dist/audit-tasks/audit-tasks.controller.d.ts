import { AuditTasksService } from './audit-tasks.service';
import { TaskStatus } from '../generated/prisma/client';
export declare class AuditTasksController {
    private readonly auditTasksService;
    constructor(auditTasksService: AuditTasksService);
    findAll(status?: string): Promise<{
        bin: {
            score: number;
            id: string;
            createdAt: Date;
            code: string;
            rackId: string;
            lastAuditedAt: Date | null;
        };
        id: string;
        createdAt: Date;
        binId: string;
        auditPlanId: string;
        status: TaskStatus;
        expectedQuantity: number | null;
        countedQuantity: number | null;
        passed: boolean | null;
        countedAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        bin: {
            score: number;
            pallets: ({
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
            } & {
                id: string;
                createdAt: Date;
                productId: string;
                binId: string;
                quantity: number;
            })[];
            id: string;
            createdAt: Date;
            code: string;
            rackId: string;
            lastAuditedAt: Date | null;
        };
        id: string;
        createdAt: Date;
        binId: string;
        auditPlanId: string;
        status: TaskStatus;
        expectedQuantity: number | null;
        countedQuantity: number | null;
        passed: boolean | null;
        countedAt: Date | null;
    }>;
    count(id: string, countedQuantity: number): Promise<{
        task: {
            id: string;
            createdAt: Date;
            binId: string;
            auditPlanId: string;
            status: TaskStatus;
            expectedQuantity: number | null;
            countedQuantity: number | null;
            passed: boolean | null;
            countedAt: Date | null;
        };
        score: {
            bin: {
                code: string;
            };
        } & {
            id: string;
            binId: string;
            score: number;
            breakdown: import("@prisma/client/runtime/library").JsonValue;
            calculatedAt: Date;
        };
    }>;
}
