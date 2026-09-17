import { Controller, Param, Post } from '@nestjs/common';
import { ScoringService } from './scoring.service';

@Controller('scoring')
export class ScoringController {
  constructor(private readonly scoringService: ScoringService) {}

  @Post('recompute')
  recomputeAll() {
    return this.scoringService.recomputeAll();
  }

  @Post('recompute/:binId')
  recomputeOne(@Param('binId') binId: string) {
    return this.scoringService.recomputeOne(binId);
  }
}
