import { Injectable, NotFoundException } from '@nestjs/common';
import UserRepository from '../repositories/user.repository';
import UserMapper from '../mapper/user.mapper';
import { LoginUserDto } from '../dto/login-user.dto ';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly mapper: UserMapper,
  ) {}

  async login(user: LoginUserDto) {
    const response = await this.repository.findByEmailAndPassword(
      user?.email,
      user?.password,
    );
    if (!response) {
      throw new NotFoundException('usuário não encontrado');
    }
    return this.mapper.toResponse(response);
  }

  async create(dto: CreateUserDto) {
    const entity = this.mapper.toEntity(dto);
    const user = await this.repository.save(entity);
    return this.mapper.toResponse(user);
  }

  async findAll() {
    const list = await this.repository.findAll();
    return list.map((user) => this.mapper.toResponse(user));
  }

  findById(userId: string): Promise<User> {
    return this.repository.findById(userId);
  }
}
