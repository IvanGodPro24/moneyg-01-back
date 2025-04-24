import Transaction from '../db/model/transactions';

export async function updateContact(transactionId, data) {
  return await Transaction.findByIdAndUpdate(transactionId, data, {
    new: true,
  });
}
