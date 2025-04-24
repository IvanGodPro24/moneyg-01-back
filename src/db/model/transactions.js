import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
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

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
