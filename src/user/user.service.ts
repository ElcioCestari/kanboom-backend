import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto ';

@Injectable()
export class UserService {
  login(user: LoginUserDto) {
    throw new Error('Method not implemented.');
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
