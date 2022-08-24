import { Module } from '@nestjs/common';

import { UserRepository } from './User/UserRepository';
import { ClientRepository } from 'src/Domain/Client/ClientRepository';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../Infrastructure/Model/User';
import { Client } from '../Infrastructure/Model/Client';

@Module({
  imports: [SequelizeModule.forFeature([User, Client])],
  providers: [UserRepository, ClientRepository],
  exports: [UserRepository, ClientRepository]
})
export class DomainModule {}