import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import BordRepository from '../repository/board.repository';
import { UserService } from '../../user/service/user.service';

@Injectable()
export class BoardService {
  constructor(
    private readonly repository: BordRepository,
    private readonly userService: UserService,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const user = await this.userService.findById(createBoardDto.userId);
    if (!user) {
      throw new NotFoundException('usuário não encontrado');
    }
    return this.repository.save(createBoardDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }

  findByUserId(id: string) {
    return this.repository.findByUserId(id);
  }
}
