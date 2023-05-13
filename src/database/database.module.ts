import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { userProviders } from './providers/user.providers';
import { boardProviders } from './providers/board.providers';

@Module({
  providers: [...databaseProviders, ...userProviders, ...boardProviders],
  exports: [...databaseProviders, ...userProviders, ...boardProviders],
})
export class DatabaseModule {}
