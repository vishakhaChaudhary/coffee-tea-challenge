/* import packages */
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/* import entity */
import { CoffeeEntity } from '../../entity';

/* import services */
import { CoffeeService } from './coffee.service';

@Controller()
/*
 * CoffeeController To perform CRUD operation
 */
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @ApiTags('coffees')
  @Get('/')
  @ApiOperation({
    description: 'Fetch all details of coffees from the database',
  })
  fetchAll(): Promise<CoffeeEntity[]> {
    return this.coffeeService.getCoffees();
  }
}
