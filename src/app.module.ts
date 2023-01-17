import { Module } from '@nestjs/common';
import { BorimapModule } from './borimap/borimap.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [BorimapModule, TypeOrmModule.forRoot(typeORMConfig), AdminModule],
})
export class AppModule {}
