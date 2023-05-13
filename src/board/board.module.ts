import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';
import BordRepository from './repository/board.repository';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [BoardService, BordRepository],
})
export class BoardModule {}
