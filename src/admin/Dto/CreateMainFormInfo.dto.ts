import { IsNotEmpty } from 'class-validator';
// 마커를 생성할 때 받을 데이터 타입
export class CreateMainFormInfoDto {
  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  imgurl: string;

}
