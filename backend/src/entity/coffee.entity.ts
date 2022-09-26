/* import packages */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Model Coffee
 * id {Number} coffee id
 * title {String} name of the coffee
 * type {String} type of coffee
 * image {String} image of the coffee
 */
@Entity('Coffee')
export class CoffeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column()
  image: string;
}
