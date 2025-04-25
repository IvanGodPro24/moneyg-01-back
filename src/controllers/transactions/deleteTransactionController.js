import createHttpError from 'http-errors';

import { deleteTransaction } from '../../services/transactions/deleteTransaction.js';

export const deleteTransactionController = async (req, res) => {
  const { transactionId } = req.params;

  const result = await deleteTransaction({
    _id: transactionId,
    userId: req.user._id,
  });

  if (!result) {
    throw createHttpError(404, 'Transaction not found');
  }

  res.status(204).send();
};
