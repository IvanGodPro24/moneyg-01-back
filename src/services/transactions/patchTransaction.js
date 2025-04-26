import Transaction from '../../db/model/transactions.js';

export async function updateContact(transactionId, data) {
  return await Transaction.findByIdAndUpdate(transactionId, data, {
    new: true,
  });
}
