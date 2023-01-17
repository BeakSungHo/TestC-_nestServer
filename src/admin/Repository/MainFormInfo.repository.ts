import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { DeleteResult, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { mainform_info } from '../Entity/Mainform.entity';
import { CreateMainFormInfoDto } from '../Dto/CreateMainFormInfo.dto';

@CustomRepository(mainform_info)
export class MainFormInfoRepository extends Repository<mainform_info> {
  /*
    MarkerInfo테이블에 모든 마커 정보를 가져오는 함수
  */
  async getAllMainForm(): Promise<mainform_info[]> {
    return await this.find();
  }
  async createMainFormInfo(createMainFormInfoDto:CreateMainFormInfoDto):Promise<mainform_info>{
      let{
        img,
        imgurl
      }:CreateMainFormInfoDto=createMainFormInfoDto;
      const mainform=this.create({
        img,
        imgurl
      })
      await this.save(mainform)
      return mainform 
    }
 
    async deleteMainFormInfo(id: number): Promise<boolean> {
      const result: DeleteResult = await this.delete(id);
      if (result.affected === 0) {
        return false;
      }
  
      return true;
    }

  // async createMarkerInfo(createMakerInfoDto: CreateMarkerInfoDto,): Promise<marker_info> {
  //   let {
  //     name,
  //     imgName,
  //     address,
  //     description,
  //     tag,
  //     latitude,
  //     longtitude,
  //   }: CreateMarkerInfoDto = createMakerInfoDto;
  //   if(!imgName.includes('http'))//만약관리자가 직접 이미지 전체의 사이트를 가져올때의 작업
  //   imgName = `https://wsggbucket.s3.ap-northeast-2.amazonaws.com/${imgName}.jpg`;

   

  //   const marker = this.create({
  //     name,
  //     imgName,
  //     address,
  //     description,
  //     tag,
  //     latitude,
  //     longtitude,
  //   });

  //   await this.save(marker);
  //   return marker;
  // }



  // /*
  //   id로 MarkerInfo 테이블에서 Marker를 가져오는 함수
  // */
  // async getMarkerData(id: number): Promise<mainform_info> {
  //   const marker: mainform_info = await this.findOne({ where: { id } });
  //   if (!marker) {
  //     throw new NotFoundException(`Not Found Id: {${id}`);
  //   }

  //   return marker;
  // }
}
