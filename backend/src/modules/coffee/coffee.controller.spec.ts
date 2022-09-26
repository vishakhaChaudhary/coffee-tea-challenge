/* import packages */
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';

/* import controller */
import { CoffeeController } from './coffee.controller';

/* import service */
import { CoffeeService } from './coffee.service';

/* import constants */
import { COFFEE_REPOSITORY } from '../../constants';

/**
 * Scripts to test Coffee Controller
 */
describe('CoffeeController', () => {
  let controller: CoffeeController;
  let spyService: CoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeController],
      providers: [
        CoffeeService,
        {
          provide: COFFEE_REPOSITORY,
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<CoffeeController>(CoffeeController);
    spyService = module.get<CoffeeService>(CoffeeService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('calling fetchAll method', () => {
    it('should return an array of coffees', async () => {
      const result = [
        {
          id: 1,
          title: 'Bio Organic',
          type: 'Arabic',
          image: 'bio-organic.jpeg',
        },
      ];
      jest
        .spyOn(spyService, 'getCoffees')
        .mockImplementation(async () => await result);

      expect(await controller.fetchAll()).toBe(result);
    });
  });
});
