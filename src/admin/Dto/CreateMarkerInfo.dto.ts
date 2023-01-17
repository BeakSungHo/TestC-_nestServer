import { IsNotEmpty } from 'class-validator';
// 마커를 생성할 때 받을 데이터 타입
export class CreateMarkerInfoDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  imgName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  tag: string;

  @IsNotEmpty()
  latitude: number;

  @IsNotEmpty()
  longtitude: number;
}
