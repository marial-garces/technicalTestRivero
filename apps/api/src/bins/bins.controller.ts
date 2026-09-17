import { Controller, Get, Param, Query } from '@nestjs/common';
import { BinsService } from './bins.service';

@Controller('bins')
export class BinsController {
  constructor(private readonly binsService: BinsService) {}

  // Declared before ':id' so '/bins/search' isn't swallowed by the ':id' route.
  @Get('search')
  search(@Query('q') q: string) {
    return this.binsService.search(q);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binsService.findOne(id);
  }
}
