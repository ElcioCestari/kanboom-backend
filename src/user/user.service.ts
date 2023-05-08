import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto ';
import UserResponseDto from './dto/user-response.dto';
import { User } from './entities/user.entity';
import UserRepository from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async login(user: LoginUserDto) {
    const response = await this.repository.findByEmailAndPassword(
      user.email,
      user.password,
    );
    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  create(dto: CreateUserDto) {
    const entity = new User();
    entity.email = dto.login;
    entity.password = dto.password;
    return this.repository.save(entity);
  }

  async findAll() {
    const list = await this.repository.findAll();
    return list.map((user) => {
      const response = new UserResponseDto();
      response.email = user.email;
      response.id = user.id;
      return response;
    });
  }
}
