import Transaction from '../../db/model/transactions.js';

export const deleteTransaction = ({ _id, userId }) =>
  Transaction.findOneAndDelete({ _id, userId });
