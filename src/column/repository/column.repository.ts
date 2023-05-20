import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Column } from '../entities/column.entity';
import { UpdateColumnDto } from '../dto/update-column.dto';

@Injectable()
export default class ColumnRepository {
  constructor(
    @Inject('COLUMN_MODEL')
    private readonly columnModel: Model<Column>,
  ) {}

  save(column: Column): Promise<Column> {
    const createdColumn = new this.columnModel(column);
    return createdColumn.save();
  }

  findAll(): Promise<Column[]> {
    return this.columnModel.find();
  }

  findAllByBoardId(boardId: string): Promise<Column[]> {
    return this.columnModel.find({ boardId }).exec();
  }

  findById(id: string): Promise<Column> {
    return this.columnModel.findById(id);
  }

  update(id: string, updateColumnDto: UpdateColumnDto): Promise<Column> {
    return this.columnModel.findOneAndUpdate({ _id: id }, updateColumnDto, {
      new: true,
    });
  }
}
