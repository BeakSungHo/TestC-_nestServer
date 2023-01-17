import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmExModule } from 'src/Custom/typeorm-ex.module';
import { AdminMarkerRepository } from './Repository/AdminMarker.repository';
import { MainFormInfoRepository } from './Repository/MainFormInfo.repository';
import { SubFormInfoRepository } from './Repository/SubFormInfo.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([AdminMarkerRepository,MainFormInfoRepository,SubFormInfoRepository])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
