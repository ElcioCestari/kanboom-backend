import { BadRequestException, Injectable } from '@nestjs/common';
import UserResponseDto from '../dto/user-response.dto';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export default class UserMapper {
  toEntity(dto: CreateUserDto): User {
    if (!dto?.email || !dto?.password) {
      throw new BadRequestException(
        'Dados inválidos. Verifique e tente novamente',
      );
    }
    const entity = new User();
    entity.email = dto.email;
    entity.password = dto.password;
    return entity;
  }
  toResponse(user: User): UserResponseDto {
    const dto = new UserResponseDto();
    dto.email = user.email;
    dto.id = user.id;
    return dto;
  }
}
