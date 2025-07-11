import createHttpError from 'http-errors';
import {
  getTransaction,
  getTransactions,
  getTransactionsByCategory,
} from '../../services/transactions/getTransactions.js';
import { parsePaginationParams } from '../../utils/parsePaginationParams.js';
import { parseSortParams } from '../../utils/parseSortParams.js';
import { parseFilterParams } from '../../utils/parseFilterParams.js';

export async function getTransactionsController(req, res) {
  const { page, perPage } = parsePaginationParams(req.query);

  const { sortOrder, sortBy } = parseSortParams(req.query);

  const filter = parseFilterParams(req.query);

  const transactions = await getTransactions(
    req.user._id,
    page,
    perPage,
    sortOrder,
    sortBy,
    filter
  );

  res.json(transactions);
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
