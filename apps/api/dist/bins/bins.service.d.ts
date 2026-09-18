import { PrismaService } from '../prisma/prisma.service';
export declare class BinsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<{
        score: number;
        breakdown: import("@prisma/client/runtime/library").JsonValue;
        scoreCalculatedAt: Date;
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
    }>;
    search(q: string): Promise<{
        id: string;
        createdAt: Date;
        code: string;
        rackId: string;
        lastAuditedAt: Date | null;
    }[]>;
}
