import { Injectable } from '@nestjs/common';
import { MarkerInfoRepository } from './Repository/MarkerInfo.repository';
import { marker_info } from './Entity/MarkerInfo.entity';

@Injectable()
export class BorimapService {
  constructor(private markerInfoRepo: MarkerInfoRepository) {}

  /*
    저장소 모듈에 id로 Marker를 가져오는 기능을 호출하는 함수
  */
  getMarker(id: number): Promise<marker_info> {
    return this.markerInfoRepo.getMarkerData(id);
  }

  /*
    모든 marker를 가져오는 저장소 함수를 호출하는 함수
  */
  getAllMarkers(): Promise<marker_info[]> {
    return this.markerInfoRepo.getAllMarkers();
  }
}
