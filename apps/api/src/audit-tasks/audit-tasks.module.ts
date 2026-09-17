import { Module } from '@nestjs/common';
import { AuditTasksController } from './audit-tasks.controller';
import { AuditTasksService } from './audit-tasks.service';
import { ScoringModule } from '../scoring/scoring.module';

@Module({
  imports: [ScoringModule],
  controllers: [AuditTasksController],
  providers: [AuditTasksService],
})
export class AuditTasksModule {}
