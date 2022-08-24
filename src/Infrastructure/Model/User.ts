import { Column, Model, Table, HasOne, BeforeCreate, BeforeUpdate, HasMany } from 'sequelize-typescript';
import * as bcrypt from 'bcrypt';
import { Client } from './Client';

@Table
export class User extends Model<User> {

  @Column
  password: string;
  
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: false })
  verified?: boolean;

  @Column({ defaultValue: true })
  isActive?: boolean;

  @Column({ defaultValue: false })
  blocked?: boolean;

  @HasMany(() => Client)
  clients?: Client[]

  @BeforeCreate
  @BeforeUpdate
  static hashPassword(user: User) {
      if (user.password) {            
          var salt = bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
      }
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
  

}
