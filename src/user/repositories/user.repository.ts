import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  save(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
