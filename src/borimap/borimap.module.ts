import { Module } from '@nestjs/common';
import { BorimapService } from './borimap.service';
import { BorimapController } from './borimap.controller';
import { TypeOrmExModule } from 'src/Custom/typeorm-ex.module';
import { MarkerInfoRepository } from './Repository/MarkerInfo.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([MarkerInfoRepository])],
  providers: [BorimapService],
  controllers: [BorimapController],
})
export class BorimapModule {}
