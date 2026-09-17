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
            binId: string;
            quantity: number;
            productId: string;
        })[];
        id: string;
        rackId: string;
        code: string;
        lastAuditedAt: Date | null;
        createdAt: Date;
    }>;
    search(q: string): Promise<{
        id: string;
        rackId: string;
        code: string;
        lastAuditedAt: Date | null;
        createdAt: Date;
    }[]>;
}
