import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['income', 'expense'],
    default: 'expense',
  },
  sum: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: function () {
      return this.type === 'expense';
    },
    enum: [
      'Main expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
      'Other expenses',
      'Entertainment',
    ],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
    default: '',
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
