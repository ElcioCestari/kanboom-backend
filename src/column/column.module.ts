import { Module } from '@nestjs/common';
import { ColumnService } from './service/column.service';
import { ColumnController } from './controller/column.controller';
import ColumnRepository from './repository/column.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ColumnController],
  providers: [ColumnService, ColumnRepository],
})
export class ColumnModule {}
