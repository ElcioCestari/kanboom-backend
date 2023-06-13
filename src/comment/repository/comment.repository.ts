import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CommentRepository {
  constructor(
    @Inject('COMMENT_MODEL')
    private readonly model: Model<Comment>,
  ) {}
}
