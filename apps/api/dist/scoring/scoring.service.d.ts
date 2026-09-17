import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';
type QueryClient = PrismaService | Prisma.TransactionClient;
export declare class ScoringService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private collectRawFactors;
    private normalize;
    private computeScores;
    recomputeAll(client?: QueryClient): Promise<({
        bin: {
            code: string;
        };
    } & {
        id: string;
        binId: string;
        score: number;
        breakdown: import("@prisma/client/runtime/library").JsonValue;
        calculatedAt: Date;
    })[]>;
    recomputeOne(binId: string, client?: QueryClient): Promise<{
        bin: {
            code: string;
        };
    } & {
        id: string;
        binId: string;
        score: number;
        breakdown: import("@prisma/client/runtime/library").JsonValue;
        calculatedAt: Date;
    }>;
}
export {};
