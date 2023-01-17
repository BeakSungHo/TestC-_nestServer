import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { BorimapService } from './borimap.service';
import { marker_info } from './Entity/MarkerInfo.entity';

@Controller('borimap')
export class BorimapController {
  constructor(private boriMapService: BorimapService) {}

  @Get()
  getAllMarkers(): Promise<marker_info[]> {
    return this.boriMapService.getAllMarkers();
  }

  @Post('/getmarker')
  getMarker(@Body('id', ParseIntPipe) id: number): Promise<marker_info> {
    return this.boriMapService.getMarker(id);
  }
}
