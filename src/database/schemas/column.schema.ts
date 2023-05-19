import * as mongoose from 'mongoose';

export const ColumnSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
  },
  name: String,
});
