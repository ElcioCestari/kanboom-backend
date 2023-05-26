import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  column: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
  },
  name: String,
});
