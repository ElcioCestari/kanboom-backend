import { Inject, Injectable } from '@nestjs/common';
import { Card } from '../entities/card.entity';
import { Model } from 'mongoose';

@Injectable()
export default class CardRepository {
  constructor(
    @Inject('CARD_MODEL')
    private readonly model: Model<Card>,
  ) {}

  create(card: Card): Promise<Card> {
    const newCard = new this.model(card);
    return newCard.save();
  }

  findAll(): Promise<Card[]> {
    return this.model.find().exec();
  }

  findOne(id: string): Promise<Card> {
    return this.model.findOne({ _id: id }).exec();
  }

  update(id: string, updateCardDto: Card): Promise<Card> {
    return this.model
      .findByIdAndUpdate({ _id: id }, updateCardDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Card> {
    return this.model.findByIdAndRemove(id).exec();
  }

  findAllByColumnId(column: string) {
    return this.model.find({ column }).exec();
  }
}
