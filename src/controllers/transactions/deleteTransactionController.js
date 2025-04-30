import createHttpError from 'http-errors';

import { deleteTransaction } from '../../services/transactions/deleteTransaction.js';
import { getTransaction } from '../../services/transactions/getTransactions.js';
import { updateUserBalance } from '../../utils/updateUserBalance.js';

export const deleteTransactionController = async (req, res) => {
  const { transactionId } = req.params;
  const userId = req.user._id;

  const transaction = await getTransaction(transactionId, userId);

  if (!transaction) throw createHttpError(404, 'Transaction not found');

  await updateUserBalance(userId, transaction, null);

  const result = await deleteTransaction({
    _id: transactionId,
    userId,
  });

  res.json(result);
};
