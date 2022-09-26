/* import packages */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Model Tea
 * id {Number} unique id of the tea
 * title {String} name of the tea
 * image {String} image of the tea
 */
@Entity('Tea')
export class TeaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;
}
