import Transaction from '../../db/model/transactions.js';

export const createTransaction = (payload) => Transaction.create(payload);
