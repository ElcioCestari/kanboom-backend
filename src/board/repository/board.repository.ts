import { Inject, Injectable } from '@nestjs/common';
import { Board } from '../entities/board.entity';
import { Model } from 'mongoose';
import { Column } from '../../column/entities/column.entity';

@Injectable()
export default class BordRepository {
  constructor(
    @Inject('BOARD_MODEL')
    private readonly boardModel: Model<Board>,
    @Inject('COLUMN_MODEL')
    private readonly columnModel: Model<Column>,
  ) {}

  save(board: Board): Promise<Board> {
    const createdBoard = new this.boardModel(board);
    return createdBoard.save();
  }

  findAll(): Promise<Board[]> {
    return this.boardModel.find();
  }

  async findByUserId(userId: string): Promise<Board[]> {
    return this.boardModel.find({ userId }).exec();
  }

  findById(id: string): Promise<Board> {
    return this.boardModel
      .findOne({ _id: id })
      .populate('columns')
      .exec()
      .then(async (result) => {
        const columns = await this.columnModel.find({ boardId: id }).exec();
        if (columns) {
          return await this.boardModel
            .findOneAndUpdate(
              { _id: id },
              { columns },
              {
                new: true,
              },
            )
            .exec();
        }
        return result;
      });
  }
}
