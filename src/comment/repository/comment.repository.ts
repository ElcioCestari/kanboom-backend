import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentRepository {
  constructor(
    @Inject('COMMENT_MODEL')
    private readonly model: Model<Comment>,
  ) {}

  save(comment: Comment): Promise<Comment> {
    return new this.model(comment).save();
  }

  findAll(): Promise<Comment[]> {
    return this.model.find();
  }

  findById(id: string): Promise<Comment> {
    return this.model.findOne({ _id: id });
  }

  update(id: string, comment: Comment): Promise<Comment> {
    return this.model
      .findByIdAndUpdate({ _id: id }, comment, { new: true })
      .exec();
  }

  delete(id: string) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}
