import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { userProviders } from './providers/user.providers';
import { boardProviders } from './providers/board.providers';
import { columnProviders } from './providers/column.providers';
import { cardProviders } from './providers/card.providers';
import { commentProviders } from './providers/comment.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...boardProviders,
    ...columnProviders,
    ...cardProviders,
    ...commentProviders,
  ],
  exports: [
    ...databaseProviders,
    ...userProviders,
    ...boardProviders,
    ...columnProviders,
    ...cardProviders,
    ...commentProviders,
  ],
})
export class DatabaseModule {}
