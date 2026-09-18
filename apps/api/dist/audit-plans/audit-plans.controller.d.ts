import { AuditPlansService } from './audit-plans.service';
export declare class AuditPlansController {
    private readonly auditPlansService;
    constructor(auditPlansService: AuditPlansService);
    create(topN: number): Promise<{
        auditTasks: ({
            bin: {
                id: string;
                createdAt: Date;
                code: string;
                rackId: string;
                lastAuditedAt: Date | null;
            };
        } & {
            id: string;
            createdAt: Date;
            binId: string;
            auditPlanId: string;
            status: import("../generated/prisma/enums").TaskStatus;
            expectedQuantity: number | null;
            countedQuantity: number | null;
            passed: boolean | null;
            countedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        topN: number;
    }>;
    findAll(): Promise<{
        pendingCount: number;
        doneCount: number;
        id: string;
        createdAt: Date;
        topN: number;
    }[]>;
    findTasks(id: string): Promise<{
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
        status: import("../generated/prisma/enums").TaskStatus;
        expectedQuantity: number | null;
        countedQuantity: number | null;
        passed: boolean | null;
        countedAt: Date | null;
    }[]>;
}
