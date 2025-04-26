
import { Schema, model } from 'mongoose';

const transactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      default: 'expense',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    date: {
      type: Date,
      required: true,
    },
    sum: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      default: '',
    },
  },
  {
    versionKey: false,
  },
);

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
