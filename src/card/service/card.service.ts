import { Injectable } from '@nestjs/common';
import { CreateCardDto } from '../dto/create-card.dto';
import { UpdateCardDto } from '../dto/update-card.dto';
import CardRepository from '../repository/card.repository';

@Injectable()
export class CardService {
  constructor(private readonly repository: CardRepository) {}

  create(createCardDto: CreateCardDto) {
    return this.repository.create(createCardDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateCardDto: UpdateCardDto) {
    return this.repository.update(id, updateCardDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }

  findAllByColumnId(id: string) {
    return this.repository.findAllByColumnId(id);
  }
}
