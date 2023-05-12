import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { IUserRepository } from './IUserRepository';
import { User } from 'src/Infrastructure/Model/User';
import { IUser } from './IUser';
import { Client } from "src/Infrastructure/Model/Client";

@Injectable()
export class UserRepository implements IUserRepository {

    constructor(
        @InjectModel(User)
        private userModel: typeof User,
      ) {}
    
      async findAll(): Promise<User[]> {
        return this.userModel.findAll();
      }


    async findClientsByUser(id: number): Promise<User> {
        return this.userModel.findOne({   
          where: { id },
          include : [{
            model: Client,
            as: 'clients'
          }]  
        });
      }
    
      async findOne(id: number): Promise<User> {
        return this.userModel.findOne({ where: { id } });
      }

      async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ where: { email } });
      }

      async create(user: IUser) : Promise<User> {
          return this.userModel.create(user);
      }
      
      async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
      }

}