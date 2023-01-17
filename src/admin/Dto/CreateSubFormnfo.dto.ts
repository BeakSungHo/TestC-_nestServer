import { IsNotEmpty } from 'class-validator';
// 마커를 생성할 때 받을 데이터 타입
export class CreateSubFormInfoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  imgurl: string;
}
