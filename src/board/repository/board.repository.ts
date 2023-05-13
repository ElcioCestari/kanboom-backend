import { Inject, Injectable } from '@nestjs/common';
import { Board } from '../entities/board.entity';
import { Model } from 'mongoose';

@Injectable()
export default class BordRepository {
  constructor(
    @Inject('BOARD_MODEL')
    private readonly BoardModel: Model<Board>,
  ) {}

  save(Board: Board): Promise<Board> {
    const createdBoard = new this.BoardModel(Board);
    return createdBoard.save();
  }

  findAll(): Promise<Board[]> {
    return this.BoardModel.find();
  }

  async findByUserId(userId: string) {
    return this.BoardModel.findOne({ userId }).exec();
  }
}
