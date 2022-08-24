import { IClient } from './IClient';
import { Client } from '../../Infrastructure/Model/Client';

export interface IUserRepository {
  findAll():Promise<Client[]>;
  findOne(id: number): Promise<Client>;
  findByEmail(email: string): Promise<Client>;
  create(user: IClient): Promise<Client>;
  remove(id: number): Promise<void>;
}