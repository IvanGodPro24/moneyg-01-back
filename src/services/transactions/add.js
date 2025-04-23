import Transaction from '../../db/model/transactions.js';

export const createTransaction = async (payload) => {
  const result = Transaction.create(payload);
  return result;
};
