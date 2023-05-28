import { Card } from '../../card/entities/card.entity';

export class Column {
  id?: any;
  boardId: string;
  name: string;
  cards: Card[];
}
