/* import packages */
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/* import entity */
import { TeaEntity } from '../../entity';

/* import service */
import { TeaService } from './tea.service';

@Controller()

/**
 * TeaController To perform CRUD operation
 */
export class TeaController {
  constructor(private teaService: TeaService) {}

  @ApiTags('tea')
  @Get('/')
  @ApiOperation({ description: 'Fetch all tea data from the database' })
  fetchAll(): Promise<TeaEntity[]> {
    return this.teaService.getTeaList();
  }
}
