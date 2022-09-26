/* import packages */
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

/* import modules */
import { DatabaseModule } from './database/database.module';
import { CoffeeModule } from './modules/coffee/coffee.module';
import { TeaModule } from './modules/tea/tea.module';

/**
 * AppModule Main module of the application
 * import all the modules created in the project
 */
@Module({
  imports: [
    DatabaseModule,
    CoffeeModule,
    TeaModule,
    RouterModule.register([
      {
        path: '/coffee',
        module: CoffeeModule,
      },
      {
        path: '/tea',
        module: TeaModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
