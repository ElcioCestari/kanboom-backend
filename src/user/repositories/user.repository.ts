import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';

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

  async findByEmailAndPassword(email: string, password: string) {
    return this.userModel.findOne({ email, password }).exec();
  }

  findById(id: string) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
