import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { userProviders } from './providers/user.providers';
import { boardProviders } from './providers/board.providers';
import { columnProviders } from './providers/column.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...boardProviders,
    ...columnProviders,
  ],
  exports: [
    ...databaseProviders,
    ...userProviders,
    ...boardProviders,
    ...columnProviders,
  ],
})
export class DatabaseModule {}
