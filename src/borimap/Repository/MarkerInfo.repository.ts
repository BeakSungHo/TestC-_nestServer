import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { marker_info } from '../Entity/MarkerInfo.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@CustomRepository(marker_info)
export class MarkerInfoRepository extends Repository<marker_info> {
  /*
    MarkerInfo테이블에 모든 마커 정보를 가져오는 함수
  */
  async getAllMarkers(): Promise<marker_info[]> {
    return await this.find();
  }

  /*
    id로 MarkerInfo 테이블에서 Marker를 가져오는 함수
  */
  async getMarkerData(id: number): Promise<marker_info> {
    const marker: marker_info = await this.findOne({ where: { id } });
    if (!marker) {
      throw new NotFoundException(`Not Found Id: {${id}`);
    }

    return marker;
  }
}
