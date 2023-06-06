import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateColumnDto } from '../dto/create-column.dto';
import { UpdateColumnDto } from '../dto/update-column.dto';
import ColumnRepository from '../repository/column.repository';
import { BoardService } from '../../board/service/board.service';
import { Column } from '../entities/column.entity';
import { CardService } from '../../card/service/card.service';

@Injectable()
export class ColumnService {
  constructor(
    private readonly repository: ColumnRepository,
    private readonly boardService: BoardService,
    private readonly cardService: CardService,
  ) {}

  async create(createColumnDto: CreateColumnDto) {
    const board = await this.boardService.findOne(createColumnDto.boardId);
    if (!board) {
      throw new NotFoundException('quadro não encontrado');
    }
    return this.repository.save(createColumnDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string): Promise<Column> {
    return this.repository.findById(id);
  }

  async update(id: string, updateColumnDto: UpdateColumnDto): Promise<Column> {
    const column: Column = await this.repository.update(id, updateColumnDto);
    if (!column) {
      throw new NotFoundException('Coluna não encontrada');
    }
    return column;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }

  async findAllByBoardId(id: string): Promise<Column[]> {
    const columns = await this.repository.findAllByBoardId(id);
    if (!columns) {
      throw new NotFoundException('Coluna não encontrada');
    }
    for (const c of columns) {
      const cards = await this.cardService.findAllByColumnId(c.id);
      c.cards = cards;
    }
    return columns;
  }
}
