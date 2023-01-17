import { Injectable } from '@nestjs/common';
import { CreateMarkerInfoDto } from './Dto/createMarkerInfo.dto';
import { AdminMarkerRepository } from './Repository/AdminMarker.repository';
import { marker_info } from 'src/borimap/Entity/MarkerInfo.entity';
import { MainFormInfoRepository } from './Repository/MainFormInfo.repository';
import { mainform_info } from './Entity/Mainform.entity';
import { subform_info } from './Entity/Subform.entity';
import { SubFormInfoRepository } from './Repository/SubFormInfo.repository';

@Injectable()
export class AdminService {
  constructor(private adminMarkerRepository: AdminMarkerRepository,
               private mainformInfoRepository:MainFormInfoRepository,
               private subformInfoRepository:SubFormInfoRepository) {}
  

  /*
    createMarkerInfoDto를 마커를 등록하는
    저장소 함수에 보내주는 함수
  */
  createMarkerInfo(
    createMakerInfoDto: CreateMarkerInfoDto,
  ): Promise<marker_info> {
    return this.adminMarkerRepository.createMarkerInfo(createMakerInfoDto);
  }

  getMarkerById(id: number): Promise <marker_info> {
    return this.adminMarkerRepository.getMarkerById(id);
}

  async updateMarkerInfo(updateMarkerInfo: marker_info): Promise<marker_info> {
    const marker:marker_info = await this.getMarkerById(updateMarkerInfo.id);
    marker.name = updateMarkerInfo.name;
    marker.imgName = updateMarkerInfo.imgName;
    marker.address = updateMarkerInfo.address;
    marker.description = updateMarkerInfo.description;
    marker.tag = updateMarkerInfo.tag;
    marker.latitude = updateMarkerInfo.latitude;
    marker.longtitude = updateMarkerInfo.longtitude;

    await this.adminMarkerRepository.save(marker);
    return marker
  }
  
  /*
    id를 받아서
    MarkerInfo테이블에 일치하는 id를 삭제해주는
    저장소 파일에 데이터를 보내주는 함수
  */
  deleteMarkerInfo(id: number): Promise<boolean> {
    return this.adminMarkerRepository.deleteMarkerInfo(id);
  }


  //region mainform 
  getAllMainForm(): Promise<mainform_info[]> {
    return this.mainformInfoRepository.getAllMainForm();
  }
  createMainFormInfo(createMainFormInfoDto):Promise<mainform_info>{
    return this.mainformInfoRepository.createMainFormInfo(createMainFormInfoDto)
  }
  deleteMainFormInfo(id:number):Promise<boolean>{
    return this.mainformInfoRepository.deleteMainFormInfo(id);
  }

  //endregion

  
  //region subform 
  getAllSubForm(): Promise<subform_info[]> {
    return this.subformInfoRepository.getAllMainForm();
  }
  createSubFormInfo(createSubFormInfoDto):Promise<subform_info>{
    return this.subformInfoRepository.createSubFormInfo(createSubFormInfoDto)
  }
  // deleteMainFormInfo(id:number):Promise<boolean>{
  //   return this.markerInfoRepository.deleteMainFormInfo(id);
  // }

  //endregion

}
