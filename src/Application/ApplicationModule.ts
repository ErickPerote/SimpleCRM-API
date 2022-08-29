import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DomainModule } from '../Domain/DomainModule';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Middleware/JwtStrategy';
import { RegisterController } from './Controller/RegisterController';
import { AuthenticationController } from './Controller/AuthenticationController';
import { WhoamiController } from './Controller/WhoamiController';
import { ClientController } from './Controller/ClientController';

import { ConfigService } from '@nestjs/config';

const jwtFactory = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    return ({
      secret: configService.get('SECRET_KEY'),
      signOptions: {
        expiresIn: Number(configService.get('EXPIRATION_TOKEN')),
      }
    })
  },
  inject: [ConfigService]
};

@Module({
  imports: [
    DomainModule, 
    ConfigModule.forRoot(),      
    JwtModule.registerAsync(jwtFactory)
  ],
  providers: [JwtStrategy],
  controllers: [
    RegisterController, 
    AuthenticationController, 
    WhoamiController, 
    ClientController
  ]
})
export class ApplicationModule {}