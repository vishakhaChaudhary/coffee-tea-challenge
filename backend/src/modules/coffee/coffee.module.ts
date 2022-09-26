/* import packages*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* import entity */
import { CoffeeEntity } from '../../entity';

/* import controller */
import { CoffeeController } from './coffee.controller';

/* import service */
import { CoffeeService } from './coffee.service';

/**
 * CoffeeModule Imports all the dependencies required for the coffee module
 * imports dependency CoffeeEntity
 * import controllers CoffeeController
 * import providers CoffeeService
 */
@Module({
  imports: [TypeOrmModule.forFeature([CoffeeEntity])],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
