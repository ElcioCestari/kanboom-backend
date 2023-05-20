import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Column } from '../entities/column.entity';

@Injectable()
export default class ColumnRepository {
  constructor(
    @Inject('COLUMN_MODEL')
    private readonly ColumnModel: Model<Column>,
  ) {}

  save(column: Column): Promise<Column> {
    const createdColumn = new this.ColumnModel(column);
    return createdColumn.save();
  }

  findAll(): Promise<Column[]> {
    return this.ColumnModel.find();
  }

  findAllByBoardId(boardId: string): Promise<Column[]> {
    return this.ColumnModel.find({ boardId }).exec();
  }
}
