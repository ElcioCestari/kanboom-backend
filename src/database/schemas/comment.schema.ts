import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Card',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  description: String,
  date: String,
});
