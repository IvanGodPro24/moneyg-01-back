import { model, Schema } from 'mongoose';

const transactionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    type: { type: String, enum: ['income', 'expense'], required: true },
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
    date: { type: Date, required: true },
    sum: { type: String, required: true },
    comment: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Transaction = model('Transaction', transactionsSchema);
export default Transaction;
