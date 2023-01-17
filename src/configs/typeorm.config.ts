import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { marker_info } from 'src/borimap/Entity/MarkerInfo.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '9023',
  // QKsksktnpdlzm.5689!
  database: 'gg',
  entities: [__dirname + '/../**/*.entity.{js,ts}', 
  marker_info],
  synchronize: true,
};
