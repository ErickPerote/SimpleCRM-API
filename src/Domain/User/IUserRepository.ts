import { User } from '../../Infrastructure/Model/User';
import { IUser } from './IUser';

export interface IUserRepository {
  findAll():Promise<User[]>;
  findOne(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(user: IUser): Promise<User>;
  remove(id: number): Promise<void>;
}