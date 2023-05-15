import { Connection } from 'mongoose';
import { BoardSchema } from '../schemas/board.schema';

export const boardProviders = [
  {
    provide: 'BOARD_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Board', BoardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
