import { Module } from '@nestjs/common';
import { ColumnService } from './service/column.service';
import { ColumnController } from './controller/column.controller';
import ColumnRepository from './repository/column.repository';
import { DatabaseModule } from '../database/database.module';
import { BoardModule } from '../board/board.module';
import { CardModule } from '../card/card.module';

@Module({
  imports: [DatabaseModule, BoardModule, CardModule],
  controllers: [ColumnController],
  providers: [ColumnService, ColumnRepository],
})
export class ColumnModule {}
