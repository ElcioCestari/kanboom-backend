import { Connection } from 'mongoose';
import { Column } from '../../column/entities/column.entity';
import { ColumnSchema } from '../schemas/column.schema';

export const columnProviders = [
  {
    provide: 'COLUMN_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Column', ColumnSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
