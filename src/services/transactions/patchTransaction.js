import Transaction from '../../db/model/transactions.js';

export const updateContact = (transactionId, data) =>
  Transaction.findByIdAndUpdate(transactionId, data, { new: true });
