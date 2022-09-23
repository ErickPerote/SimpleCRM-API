import { IClient } from './IClient';
import { Client } from '../../Infrastructure/Model/Client';

export interface IUserRepository {
  findAll():Promise<Client[]>;
  findOne(id: number, user_id): Promise<Client>;
  findByEmail(email: string): Promise<Client>;
  create(client: IClient): Promise<Client>;
  remove(id: number): Promise<void>;
}