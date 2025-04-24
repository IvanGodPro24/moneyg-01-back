import Transaction from '../../db/model/transactions.js';

export async function getTransactions(userId) {
  return await Transaction.find({ userId });
}

export async function getTransaction(transactionId, userId) {
  return await Transaction.findOne({
    _id: transactionId,
    userId,
  });
}
