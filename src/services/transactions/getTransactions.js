import Transaction from '../../db/model/transactions.js';

export async function getTransactions(userId) {
  return await Transaction.find({ userId }).populate('categoryId', 'title');
}

export async function getTransaction(transactionId, userId) {
  return await Transaction.findOne({
    _id: transactionId,
    userId,
  }).populate('categoryId', 'title');
}

export async function getTransactionsByCategory(userId, categoryId) {
  return await Transaction.find({ userId, categoryId }).populate(
    'categoryId',
    'title',
  );
}
