import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './User';

@Table
export class Client extends Model<Client> {

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @Column
  full_name: string;

  @Column
  email: string;


  @Column
  street: string;

  @Column
  district: string;

  @Column
  locality: string;

  @Column
  description: string;

  @Column
  phone: string;

}


