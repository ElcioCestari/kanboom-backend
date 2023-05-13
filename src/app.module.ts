import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [UserModule, DatabaseModule, BoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
