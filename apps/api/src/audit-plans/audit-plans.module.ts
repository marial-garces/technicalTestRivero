import { Module } from '@nestjs/common';
import { AuditPlansController } from './audit-plans.controller';
import { AuditPlansService } from './audit-plans.service';

@Module({
  controllers: [AuditPlansController],
  providers: [AuditPlansService],
})
export class AuditPlansModule {}
