import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Card } from '../../card/entities/card.entity';

export class CreateColumnDto {
  @IsNotEmpty()
  @IsMongoId()
  boardId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  cards: Card[];
}
