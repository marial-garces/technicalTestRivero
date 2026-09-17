import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WarehousesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const warehouses = await this.prisma.warehouse.findMany({
      include: {
        aisles: { include: { racks: { include: { bins: { select: { id: true } } } } } },
      },
      orderBy: { createdAt: 'asc' },
    });

    return warehouses.map(({ aisles, ...warehouse }) => ({
      ...warehouse,
      binCount: aisles.reduce(
        (sum, aisle) =>
          sum + aisle.racks.reduce((rackSum, rack) => rackSum + rack.bins.length, 0),
        0,
      ),
    }));
  }

  /**
   * Full aisle -> rack -> bin structure with each bin's latest ScoreSnapshot,
   * for the heatmap grid.
   */
  async getHeatmap(warehouseId: string) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: warehouseId },
      include: {
        aisles: {
          orderBy: { code: 'asc' },
          include: {
            racks: {
              orderBy: { code: 'asc' },
              include: {
                bins: {
                  orderBy: { code: 'asc' },
                  include: {
                    scoreSnapshots: {
                      orderBy: { calculatedAt: 'desc' },
                      take: 1,
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!warehouse) {
      throw new NotFoundException(`Warehouse ${warehouseId} not found`);
    }

    return {
      id: warehouse.id,
      name: warehouse.name,
      aisles: warehouse.aisles.map((aisle) => ({
        id: aisle.id,
        code: aisle.code,
        racks: aisle.racks.map((rack) => ({
          id: rack.id,
          code: rack.code,
          bins: rack.bins.map(({ scoreSnapshots, ...bin }) => {
            const latest = scoreSnapshots[0] ?? null;
            return {
              ...bin,
              score: latest?.score ?? null,
              breakdown: latest?.breakdown ?? null,
              scoreCalculatedAt: latest?.calculatedAt ?? null,
            };
          }),
        })),
      })),
    };
  }
}
