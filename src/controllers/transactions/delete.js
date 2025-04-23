import createHttpError from 'http-errors';

import { deleteTransaction } from '../../services/transactions/delete.js';

export const deletCTransactionController = async (req, res, next) => {
  const { id } = req.params;
  const result = await deleteTransaction({
    _id: id,
    userId: req.user._id,
  });

  if (!result) {
    throw createHttpError(404, 'Transaction not found');
  }

  res.status(204).send();
};
