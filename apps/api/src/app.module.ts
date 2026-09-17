import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ScoringModule } from './scoring/scoring.module';
import { BinsModule } from './bins/bins.module';
import { AuditPlansModule } from './audit-plans/audit-plans.module';
import { AuditTasksModule } from './audit-tasks/audit-tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ScoringModule,
    BinsModule,
    AuditPlansModule,
    AuditTasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
