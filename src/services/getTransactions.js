import Transaction from '../db/model/transactions.js';

export async function getTransactions(userEmail) {
  return await Transaction.find({ userEmail });
}

export async function getTransaction(transactionId, userEmail) {
  return await Transaction.findOne({
    _id: transactionId,
    userEmail: userEmail,
  });
}
