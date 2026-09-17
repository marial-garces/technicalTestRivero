import { PrismaService } from '../prisma/prisma.service';
import { TaskStatus } from '../generated/prisma/client';
export declare class AuditPlansService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(topN: number): Promise<{
        auditTasks: ({
            bin: {
                id: string;
                rackId: string;
                code: string;
                lastAuditedAt: Date | null;
                createdAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            binId: string;
            auditPlanId: string;
            status: TaskStatus;
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
    findTasks(planId: string): Promise<{
        bin: {
            score: number;
            id: string;
            rackId: string;
            code: string;
            lastAuditedAt: Date | null;
            createdAt: Date;
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
}
