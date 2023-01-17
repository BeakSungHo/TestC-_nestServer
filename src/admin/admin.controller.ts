import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateMarkerInfoDto } from './Dto/createmarkerinfo.dto';
import { marker_info } from 'src/borimap/Entity/MarkerInfo.entity';
import { mainform_info } from './Entity/Mainform.entity';
import { CreateMainFormInfoDto } from './Dto/CreateMainFormInfo.dto';
import { CreateSubFormInfoDto } from './Dto/CreateSubFormnfo.dto';
import { subform_info } from './Entity/Subform.entity';

@Controller('admin')
export class AdminController {
  // AdminService 의존성 주입
  constructor(private adminService: AdminService) {}

  //#region Marker Managemen
  /*
      createMarkerInfoDto를 받아서
      새롭게 데이터를 등록하는 AdminService함수에에 전달하는 EndPoint
    */
  @Post('/createmarker')
  @UsePipes(ValidationPipe)
  createMarkerInfo(@Body() createMarkerInfoDto: CreateMarkerInfoDto,): Promise<marker_info> {
    return this.adminService.createMarkerInfo(createMarkerInfoDto);
  }
  @Post('/updatemarker')
  updateMarker(
    @Body() updateMarkerInfoDto: marker_info)
    : Promise<marker_info> {
    return this.adminService.updateMarkerInfo(updateMarkerInfoDto)
  }
  @Post('/deletemarker')
  deleteMarker(@Body('id', ParseIntPipe) id: number): string {
    return this.adminService.deleteMarkerInfo(id)
      ? 'Delete Complete'
      : `Not Found This Id ${id}`;
  }



  //#endregion


  
  //#region mainform 작업
  @Get('/getmainform')
  getAllMainForm(): Promise<mainform_info[]> {
    return this.adminService.getAllMainForm();
  }
  @Post('/postmainformcreate')
  @UsePipes(ValidationPipe)
  createMainFormInfo(@Body() createMainFormInfoDto: CreateMainFormInfoDto,): Promise<mainform_info> {
    return this.adminService.createMainFormInfo(createMainFormInfoDto);
  }
    @Post('/postmainformdelete')
    deleteMainFormInfo(@Body('id', ParseIntPipe) id: number): string {
      return this.adminService.deleteMainFormInfo(id)
        ? 'Delete Complete'
        : `Not Found This Id ${id}`;
    }
  
  //#endregion ~

  //#region mainform 작업
  @Get('/getsubform')
  getAllSubForm(): Promise<subform_info[]> {
    return this.adminService.getAllSubForm();
  }
  @Post('/postsubformcreate')
  @UsePipes(ValidationPipe)
  createSubFormInfo(@Body() createSubFormInfoDto: CreateSubFormInfoDto,): Promise<subform_info> {
    return this.adminService.createSubFormInfo(createSubFormInfoDto);
  }
  //   @Post('/postmainformdelete')
  //   deleteMainFormInfo(@Body('id', ParseIntPipe) id: number): string {
  //     return this.adminService.deleteMainFormInfo(id)
  //       ? 'Delete Complete'
  //       : `Not Found This Id ${id}`;
  //   }

  //#endregion ~
}
