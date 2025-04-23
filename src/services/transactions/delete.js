import Transaction from '../../db/model/transactions.js';

export const deleteTransaction = async ({ _id, userId }) => {
  const result = Transaction.findOneAndDelete({ _id, userId });
  return result;
};
