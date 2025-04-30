import createHttpError from 'http-errors';
import { updateContact } from '../../services/transactions/patchTransaction.js';
import { getTransaction } from '../../services/transactions/getTransactions.js';
import { updateUserBalance } from '../../utils/updateUserBalance.js';

export const patchTransactionController = async (req, res) => {
  const { transactionId } = req.params;
  const userId = req.user._id;

  const oldTransaction = await getTransaction(transactionId, userId);

  if (!oldTransaction) throw createHttpError(404, 'Transaction not found');

  const result = await updateContact(transactionId, req.body);

  if (!result) throw createHttpError(404, 'Transaction not found');

  await updateUserBalance(userId, oldTransaction, result);

  res.json(result);
};
