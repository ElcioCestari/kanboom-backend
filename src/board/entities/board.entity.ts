import { Column } from '../../column/entities/column.entity';

export class Board {
  id?: any;
  userId: string;
  name: string;
  columns?: Column[];
}
