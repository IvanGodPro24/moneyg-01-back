import createHttpError from 'http-errors';
import {
  getTransaction,
  getTransactions,
  getTransactionsByCategory,
} from '../../services/transactions/getTransactions.js';

export async function getTransactionsController(req, res) {
  const response = await getTransactions(req.user._id);

  res.json(response);
}

export async function getTransactionController(req, res) {
  const { transactionId } = req.params;

  const transaction = await getTransaction(transactionId, req.user._id);

  if (transaction === null) {
    throw new createHttpError.NotFound('Transaction not found');
  }
  res.json(transaction);
}

export async function getTransactionsByCategoryController(req, res) {
  const { categoryId } = req.params;
  const userId = req.user._id;

  const transactions = await getTransactionsByCategory(userId, categoryId);

  res.json(transactions);
}
