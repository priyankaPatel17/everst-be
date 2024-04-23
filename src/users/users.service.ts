import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user.model';
import { compare, hash } from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async insertTestUser(): Promise<User> {
    const saltRounds = 10; 
    const hashedPassword = await hash('admin', saltRounds);

    const testUser = new this.userModel({
      username: 'test',
      password: hashedPassword,
      email: 'patel3riya@gmail.com',
      phone : '13444256',
      name: 'Priya'
    });
    return testUser.save();
  }
}
