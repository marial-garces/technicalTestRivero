import { PrismaService } from '../prisma/prisma.service';
export declare class ScoringService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private collectRawFactors;
    private normalize;
    private computeScores;
    recomputeAll(): Promise<({
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
    recomputeOne(binId: string): Promise<{
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
