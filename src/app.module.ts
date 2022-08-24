import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { InfrastructureModule } from './Infrastructure/infrastructureMoule';
import { ApplicationModule } from './Application/ApplicationModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ApplicationModule,
    InfrastructureModule,
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [join(__dirname, 'Infrastructure/Model/', '*.{ts,js}')],
      autoLoadModels: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
