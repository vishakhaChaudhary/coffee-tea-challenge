/* import packages */
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/* import entity */
import { TeaEntity } from '../../entity';

/* import mock data */
import { teaMockData } from '../../mock/tea.mock';

@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(TeaEntity)
    private teaRepository: Repository<TeaEntity>,
  ) {}

  /**
   * GetTeaList Method
   * If no data found in database then it will save the list of tea data
   * Error ServiceUnavailableException Internal Server Error
   * returns list List of teas
   */
  getTeaList = async () => {
    try {
      const list = await this.teaRepository.find();
      if (!list.length) {
        return await this.teaRepository.save(teaMockData);
      }
      return list;
    } catch (error) {
      throw new ServiceUnavailableException();
    }
  };
}
