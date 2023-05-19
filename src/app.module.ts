import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { BoardModule } from './board/board.module';
import { EmailModule } from './email/email.module';
@Module({
  imports: [UserModule, DatabaseModule, BoardModule, EmailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
