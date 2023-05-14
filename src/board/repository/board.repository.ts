import { Inject, Injectable } from '@nestjs/common';
import { Board } from '../entities/board.entity';
import { Model } from 'mongoose';

@Injectable()
export default class BordRepository {
  constructor(
    @Inject('BOARD_MODEL')
    private readonly BoardModel: Model<Board>,
  ) {}

  save(board: Board): Promise<Board> {
    const createdBoard = new this.BoardModel(board);
    return createdBoard.save();
  }

  findAll(): Promise<Board[]> {
    return this.BoardModel.find();
  }

  async findByUserId(userId: string) {
    return this.BoardModel.findOne({ userId }).exec();
  }
}
