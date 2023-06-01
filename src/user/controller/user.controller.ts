import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto ';
import UserResponseDto from "../dto/user-response.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('/reset_password')
  resetPassword(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.userService.resetPassword(createUserDto);
  }

  @Post('/login')
  login(@Body() user: LoginUserDto): Promise<UserResponseDto> {
    return this.userService.login(user);
  }
}
