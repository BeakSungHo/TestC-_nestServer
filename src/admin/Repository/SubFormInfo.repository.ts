import { CustomRepository } from 'src/Custom/typeorm-ex.decorator';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMainFormInfoDto } from '../Dto/CreateMainFormInfo.dto';
import { subform_info } from '../Entity/Subform.entity';
import { CreateSubFormInfoDto } from '../Dto/CreateSubFormnfo.dto';

@CustomRepository(subform_info)
export class SubFormInfoRepository extends Repository<subform_info> {
  /*
    MarkerInfo테이블에 모든 마커 정보를 가져오는 함수
  */
  async getAllMainForm(): Promise<subform_info[]> {
    return await this.find();
  }

  async createSubFormInfo(createSubFormInfoDto:CreateSubFormInfoDto):Promise<subform_info>{
      let{
        title,
        description,
        img,
        imgurl
      }:CreateSubFormInfoDto=createSubFormInfoDto;
      const subform=this.create({
        title,
        description,
        img,
        imgurl
      })
      await this.save(subform)
      return subform 
    }
 
    // async deleteMainFormInfo(id: number): Promise<boolean> {
    //   const result: DeleteResult = await this.delete(id);
    //   if (result.affected === 0) {
    //     return false;
    //   }
  
    //   return true;
    // }

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
