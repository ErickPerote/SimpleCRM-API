import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';

import { InfrastructureModule } from './Infrastructure/infrastructureMoule';

import { ApplicationModule } from './Application/ApplicationModule';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ApplicationModule,
    InfrastructureModule,
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'mssql1Ipw',
      database: 'SimpleCRM',
      models: [join(__dirname, 'Infrastructure/Model/', '*.{ts,js}')],
      autoLoadModels: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
