import { Module } from '@nestjs/common';
import { CardService } from './service/card.service';
import { CardController } from './controller/card.controller';
import CardRepository from './repository/card.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CardController],
  providers: [CardService, CardRepository],
})
export class CardModule {}
