import { Module } from '@nestjs/common';
import { DomainModule } from '../Domain/DomainModule';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Middleware/JwtStrategy';
import { RegisterController } from './Controller/RegisterController';
import { AuthenticationController } from './Controller/AuthenticationController';
import { WhoamiController } from './Controller/WhoamiController';
import { ClientController } from './Controller/ClientController';
@Module({
  imports: [DomainModule,    
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: process.env.EXPIRATION_TOKEN,
      },
    })
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