import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { IUserRepository } from './IClientRepository';
import { Client } from '../../Infrastructure/Model/Client';
import { IClient } from './IClient';

@Injectable()
export class ClientRepository implements IUserRepository {

    constructor(
        @InjectModel(Client)
        private userModel: typeof Client,
      ) {}
    
      async findAll(): Promise<Client[]> {
        return this.userModel.findAll();
      }
    
      async findOne(id: number): Promise<Client> {
        return this.userModel.findOne({ where: { id } });
      }

      async findByEmail(email: string): Promise<Client> {
        return this.userModel.findOne({ where: { email } });
      }

      async create(user: IClient) : Promise<Client> {
          return this.userModel.create(user);
      }
      
      async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
      }

}