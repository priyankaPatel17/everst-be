import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
    constructor(
      @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
      private readonly usersService: UsersService,
      private readonly jwtService: JwtService,
    ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username });
    return user;
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  generateToken(user) {
    const payload = { username: user.username, sub: user._id };
    return this.jwtService.sign(payload);
  }

}
