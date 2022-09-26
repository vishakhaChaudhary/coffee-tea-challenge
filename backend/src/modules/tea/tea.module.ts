/* import packages */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/* import entity */
import { TeaEntity } from '../../entity';

/* import controller */
import { TeaController } from './tea.controller';

/* import service */
import { TeaService } from './tea.service';

/**
 * TeaModule Imports all the dependencies required for the module
 * imports TeaEntity
 * controllers TeaController
 * providers TeaService
 */
@Module({
  imports: [TypeOrmModule.forFeature([TeaEntity])],
  controllers: [TeaController],
  providers: [TeaService],
})
export class TeaModule {}
