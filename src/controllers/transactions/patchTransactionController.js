import createHttpError from 'http-errors';
import { updateContact } from '../../services/transactions/patchTransaction.js';

export const patchTransactionController = async (req, res) => {
  const { transactionId } = req.params;
  const result = await updateContact(transactionId, req.body);

  if (!result) throw createHttpError(404, 'Transaction not found');

  res.json(result);
};
