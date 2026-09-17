import { BadRequestException, Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { AuditTasksService } from './audit-tasks.service';
import { TaskStatus } from '../generated/prisma/client';

const VALID_STATUSES = Object.values(TaskStatus) as string[];

@Controller('audit-tasks')
export class AuditTasksController {
  constructor(private readonly auditTasksService: AuditTasksService) {}

  @Get()
  findAll(@Query('status') status?: string) {
    if (status !== undefined && !VALID_STATUSES.includes(status)) {
      throw new BadRequestException(`status must be one of: ${VALID_STATUSES.join(', ')}`);
    }
    return this.auditTasksService.findAll(status as TaskStatus | undefined);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditTasksService.findOne(id);
  }

  @Patch(':id/count')
  count(@Param('id') id: string, @Body('countedQuantity') countedQuantity: number) {
    if (typeof countedQuantity !== 'number' || !Number.isFinite(countedQuantity) || countedQuantity < 0) {
      throw new BadRequestException('countedQuantity must be a non-negative number');
    }
    return this.auditTasksService.count(id, countedQuantity);
  }
}
