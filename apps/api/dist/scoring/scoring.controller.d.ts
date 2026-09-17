import { ScoringService } from './scoring.service';
export declare class ScoringController {
    private readonly scoringService;
    constructor(scoringService: ScoringService);
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
