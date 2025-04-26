import createHttpError from 'http-errors';
import { updateContact } from '../../services/transactions/patchTransaction.js';

export const patchTransactionController = async (req, res, next) => {
  const { transactionId } = req.params;
  const result = await updateContact(transactionId, req.body);

  if (!result) {
    next(createHttpError(404, 'Transaction not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a transaction!`,
    data: result.student,
  });
};
