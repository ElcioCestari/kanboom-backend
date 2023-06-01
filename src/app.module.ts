import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { BoardModule } from './board/board.module';
import { ColumnModule } from './column/column.module';
import { CardModule } from './card/card.module';

import { EmailModule } from './email/email.module';
@Module({
  imports: [
    UserModule,
    DatabaseModule,
    BoardModule,
    ColumnModule,
    CardModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
