import createHttpError from 'http-errors';
import { updateContact } from '../../services/transactions/patchTransaction.js';
import { getTransaction } from '../../services/transactions/getTransactions.js';
import { updateUserBalance } from '../../utils/updateUserBalance.js';
import { findCategoryByTitle } from '../../services/categories/categoriesService.js';
import { findUserById } from '../../services/user/userCurrentService.js';

export const patchTransactionController = async (req, res) => {
  const { type, category: categoryTitle, date, sum, comment } = req.body;
  const { transactionId } = req.params;
  const userId = req.user._id;

  let categoryId;

  if (type === 'expense') {
    if (!categoryTitle) {
      throw createHttpError(
        400,
        'Category is required for expense transactions',
      );
    }
    const foundCategory = await findCategoryByTitle(categoryTitle);
    if (!foundCategory) {
      throw createHttpError(
        404,
        `Category with title "${categoryTitle}" not found`,
      );
    }
    categoryId = foundCategory._id;
  } else if (type === 'income') {
    const incomeCategory = await findCategoryByTitle('Income');
    if (!incomeCategory) {
      throw createHttpError(500, 'Income category not found in database');
    }
    categoryId = incomeCategory._id;
  }

  const oldTransaction = await getTransaction(transactionId, userId);
  if (!oldTransaction) throw createHttpError(404, 'Transaction not found');

  const result = await updateContact(transactionId, {
    type,
    categoryId,
    date,
    sum,
    comment,
    userId,
  });
  if (!result) throw createHttpError(404, 'Transaction not found');

  const populatedResult = await result.populate('categoryId', 'title');

  await updateUserBalance(userId, oldTransaction, populatedResult);

  const updatedUser = await findUserById(userId);

  res.json({
    ...populatedResult.toObject(),
    userBalance: updatedUser ? updatedUser.balance : req.user.balance,
  });
};
