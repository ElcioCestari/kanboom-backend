import { Module } from '@nestjs/common';
import { CardService } from './service/card.service';
import { CardController } from './controller/card.controller';
import CardRepository from './repository/card.repository';
import { DatabaseModule } from '../database/database.module';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [DatabaseModule, CommentModule],
  controllers: [CardController],
  providers: [CardService, CardRepository],
  exports: [CardService],
})
export class CardModule {}
