/* import packages */
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';

/* import controller */
import { TeaController } from './tea.controller';

/* import service */
import { TeaService } from './tea.service';

/* import constants */
import { TEA_REPOSITORY } from '../../constants';

/**
 * Scripts to test Tea Controller
 */
describe('TeaController', () => {
  let controller: TeaController;
  let teaService: TeaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeaController],
      providers: [
        TeaService,
        {
          provide: TEA_REPOSITORY,
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<TeaController>(TeaController);
    teaService = module.get<TeaService>(TeaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('calling fetchAll method', () => {
    it('should return an array of teas', async () => {
      const result = [
        {
          id: 1,
          title: 'Organic Tea',
          image: 'organic-tea.jpeg',
        },
      ];
      jest
        .spyOn(teaService, 'getTeaList')
        .mockImplementation(async () => await result);

      expect(await controller.fetchAll()).toBe(result);
    });
  });
});
