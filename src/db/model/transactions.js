import { Schema, model } from 'mongoose';

const transactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      default: 'expense',
      required: true,
    },
    category: {
      type: String,
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
      required: function () {
        return this.type === 'expense';
      },
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    sum: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      default: '',
    },
    userEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Transaction = model('Transaction', transactionSchema);

export default Transaction;
