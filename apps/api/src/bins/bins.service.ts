import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const SEARCH_RESULTS_LIMIT = 10;

@Injectable()
export class BinsService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const bin = await this.prisma.bin.findUnique({
      where: { id },
      include: {
        pallets: { include: { product: true } },
        scoreSnapshots: { orderBy: { calculatedAt: 'desc' }, take: 1 },
      },
    });

    if (!bin) {
      throw new NotFoundException(`Bin ${id} not found`);
    }

    const { scoreSnapshots, ...rest } = bin;
    const latestSnapshot = scoreSnapshots[0] ?? null;

    return {
      ...rest,
      score: latestSnapshot?.score ?? null,
      breakdown: latestSnapshot?.breakdown ?? null,
      scoreCalculatedAt: latestSnapshot?.calculatedAt ?? null,
    };
  }

  async search(q: string) {
    if (!q) {
      return [];
    }

    return this.prisma.bin.findMany({
      where: { code: { contains: q, mode: 'insensitive' } },
      orderBy: { code: 'asc' },
      take: SEARCH_RESULTS_LIMIT,
    });
  }
}
