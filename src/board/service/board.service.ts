import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import BordRepository from '../repository/board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BordRepository) {}
  create(createBoardDto: CreateBoardDto) {
    return this.repository.save(createBoardDto);
  }

  findAll() {
    return `This action returns all board`;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
