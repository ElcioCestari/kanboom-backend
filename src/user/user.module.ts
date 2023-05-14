import { Module } from '@nestjs/common';
import UserRepository from './repositories/user.repository';
import { DatabaseModule } from 'src/database/database.module';
import UserMapper from './mapper/user.mapper';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserMapper],
  exports: [UserService],
})
export class UserModule {}
