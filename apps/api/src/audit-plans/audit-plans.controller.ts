import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuditPlansService } from './audit-plans.service';

@Controller('audit-plans')
export class AuditPlansController {
  constructor(private readonly auditPlansService: AuditPlansService) {}

  @Post()
  create(@Body('topN') topN: number) {
    if (typeof topN !== 'number' || !Number.isFinite(topN) || topN <= 0) {
      throw new BadRequestException('topN must be a positive number');
    }
    return this.auditPlansService.create(topN);
  }

  @Get()
  findAll() {
    return this.auditPlansService.findAll();
  }

  @Get(':id/tasks')
  findTasks(@Param('id') id: string) {
    return this.auditPlansService.findTasks(id);
  }
}
