import createHttpError from 'http-errors';
import {
  getTransaction,
  getTransactions,
} from '../services/getTransactions.js';

export async function getTransactionsController(req, res) {
  const response = await getTransactions(req.user.email);

  res.json({
    status: 200,
    message: 'Successfully found transactions!',
    data: response,
  });
}

export async function getTransactionController(req, res) {
  const { transactionId } = req.params;

  const transaction = await getTransaction(transactionId, req.user.email);

  if (transaction === null) {
    throw new createHttpError.NotFound('Transaction not found');
  }

  res.json({
    status: 200,
    message: 'Successfully found transaction!',
    data: transaction,
  });
}
