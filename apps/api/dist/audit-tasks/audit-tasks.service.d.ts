import { PrismaService } from '../prisma/prisma.service';
import { ScoringService } from '../scoring/scoring.service';
import { TaskStatus } from '../generated/prisma/client';
export declare class AuditTasksService {
    private readonly prisma;
    private readonly scoringService;
    constructor(prisma: PrismaService, scoringService: ScoringService);
    findAll(status?: TaskStatus): Promise<({
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
    })[]>;
    findOne(id: string): Promise<{
        bin: {
            pallets: ({
                product: {
                    id: string;
                    name: string;
                    sku: string;
                };
            } & {
                id: string;
                createdAt: Date;
                binId: string;
                quantity: number;
                productId: string;
            })[];
        } & {
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
