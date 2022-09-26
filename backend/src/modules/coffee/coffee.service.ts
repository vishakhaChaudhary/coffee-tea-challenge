/* import packages */
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

/* import entity */
import { CoffeeEntity } from '../../entity';

/* import mock data */
import { coffeeMockData } from '../../mock/coffee.mock';

@Injectable()

/**
 * Coffee Service
 * Inject Coffee Entity
 */
export class CoffeeService {
  constructor(
    @InjectRepository(CoffeeEntity)
    private coffeeRepository: Repository<CoffeeEntity>,
  ) {}

  /**
   * Get Coffee Method
   * If no data found in database then it will save the list of coffee data
   * Error ServiceUnavailableException Internal Server Error
   * returns list Lists of Coffees
   */

  getCoffees = async () => {
    try {
      const list = await this.coffeeRepository.find();
      if (!list.length) {
        return await this.coffeeRepository.save(coffeeMockData);
      }
      return list;
    } catch (error) {
      throw new ServiceUnavailableException();
    }
  };
}
