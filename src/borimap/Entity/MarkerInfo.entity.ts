import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class marker_info extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imgName: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @Column()
  tag: string;

  @Column('real')
  latitude: number;

  @Column('real')
  longtitude: number;
}
