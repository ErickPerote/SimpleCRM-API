import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { IUserRepository } from './IClientRepository';
import { Client } from '../../Infrastructure/Model/Client';
import { IClient } from './IClient';

@Injectable()
export class ClientRepository implements IUserRepository {

    constructor(
        @InjectModel(Client)
        private clientModel: typeof Client,
      ) {}
    
      async findAll(): Promise<Client[]> {
        return this.clientModel.findAll();
      }
    
      async findOne(id: number, user_id): Promise<Client> {
        return this.clientModel.findOne({ where: { id: id, user_id } });
      }

      async findByEmail(email: string): Promise<Client> {
        return this.clientModel.findOne({ where: { email } });
      }

      async create(client: IClient) : Promise<Client> {
          return this.clientModel.create(client);
      }
      
      async remove(id: number): Promise<void> {
        const user = await this.clientModel.findOne({ where: { id } });
        await user.destroy();
      }

}