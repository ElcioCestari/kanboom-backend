import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';
import BordRepository from './repository/board.repository';
import { DatabaseModule } from '../database/database.module';
import { UserModule } from '../user/user.module';
@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [BoardController],
  providers: [BoardService, BordRepository],
  exports: [BoardService],
})
export class BoardModule {}
