import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto ';
import { User } from './entities/user.entity';
import UserRepository from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  login(user: LoginUserDto) {
    throw new Error('Method not implemented.');
  }

  create(dto: CreateUserDto) {
    const entity = new User();
    entity.login = dto.login;
    entity.password = dto.password;
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.findAll();
  }
}
