import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { CommentRepository } from '../repository/comment.repository';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(private readonly repository: CommentRepository) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = createCommentDto as Comment;
    comment.date = new Date();
    return this.repository.save(comment);
  }

  findAll(): Promise<Comment[]> {
    return this.repository.findAll();
  }

  findOne(id: string): Promise<Comment> {
    return this.repository.findById(id);
  }

  update(id: string, updateCommentDto: UpdateCommentDto): Promise<Comment> {
    return this.repository.update(id, updateCommentDto as Comment);
  }

  remove(id: string): Promise<Comment> {
    return this.repository.delete(id);
  }

  findAllCommentsByCardId(id: string): Promise<Comment[]> {
    return this.repository.findAllByCardId(id);
  }
}
