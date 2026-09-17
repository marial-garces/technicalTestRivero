import { Controller, Get, Param } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Get()
  findAll() {
    return this.warehousesService.findAll();
  }

  @Get(':id/heatmap')
  getHeatmap(@Param('id') id: string) {
    return this.warehousesService.getHeatmap(id);
  }
}
