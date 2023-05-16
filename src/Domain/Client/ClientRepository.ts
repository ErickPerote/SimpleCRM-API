import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { IUserRepository } from './IClientRepository';
import { Client } from '../../Infrastructure/Model/Client';
import { IClient } from './IClient';
import { clientParams } from "src/Application/DTOs/RegisterClientDto";
import { Op } from 'sequelize';
import { pickBy } from 'lodash';
import { count } from "console";


@Injectable()
export class ClientRepository implements IUserRepository {

  constructor(
    @InjectModel(Client)
    private clientModel: typeof Client,
  ) { }

  async findAll(): Promise<Client[]> {
    return this.clientModel.findAll();
  }

  async findOne(id: number, user_id): Promise<Client> {
    return this.clientModel.findOne({ where: { id: id, user_id } });
  }

  async findByEmail(email: string): Promise<Client> {
    return this.clientModel.findOne({ where: { email } });
  }

  async create(client: IClient): Promise<Client> {
    return this.clientModel.create(client);
  }

  async remove(id: number): Promise<void> {
    const user = await this.clientModel.findOne({ where: { id } });
    await user.destroy();
  }

  async filters(params: clientParams, id: number): Promise<{ data: Client[], total: number }> {
    const limit = params.limit * 1
    
    const offset = (params.page) * limit;
    const whereClause = pickBy({
      full_name: params.full_name ? { [Op.like]: `%${params.full_name}%` } : undefined,
      zip_code: params.zip_code ? { [Op.like]: `%${params.zip_code}%` } : undefined,
      email: params.email ? { [Op.like]: `%${params.email}%` } : undefined,
      street: params.street ? { [Op.like]: `%${params.street}%` } : undefined,
      district: params.district ? { [Op.like]: `%${params.district}%` } : undefined,
      locality: params.locality  ? { [Op.like]: `%${params.locality}%` } : undefined,
      description: params.description ? { [Op.like]: `%${params.description}%` } : undefined,
      phone: params.phone ? { [Op.like]: `%${params.phone}%` } : undefined,
    });

    const query = {
      where: {
        ...whereClause,
        user_id: id,
      },
      limit: limit,
      offset: offset
    };

    const total = await this.clientModel.count({ where: whereClause });

    return {
      data: await this.clientModel.findAll(query),
      total: total
    }
  }

  
}