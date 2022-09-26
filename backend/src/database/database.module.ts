/* import packages */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * DatabaseModule Module to configure to database connection
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
