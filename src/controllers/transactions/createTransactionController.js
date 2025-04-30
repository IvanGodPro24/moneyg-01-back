import createHttpError from 'http-errors';
import { createTransaction } from '../../services/transactions/createTransaction.js';
import Category from '../../db/model/Categories.js';
import { updateUserBalance } from '../../utils/updateUserBalance.js';

export const createTransactionController = async (req, res) => {
  const { type, category: categoryTitle, date, sum, comment } = req.body;
  const userId = req.user._id;

  let categoryId;

  if (type === 'expense' && !categoryTitle) {
    throw createHttpError(400, 'Category is required for expense transactions');
  }

  if (categoryTitle) {
    const foundCategory = await Category.findOne({ title: categoryTitle });
    if (!foundCategory) {
      throw createHttpError(
        404,
        `Category with title "${categoryTitle}" not found`,
      );
    }
    categoryId = foundCategory._id;
  } else if (type === 'income') {
    const incomeCategory = await Category.findOne({ title: 'Income' });
    if (!incomeCategory) {
      throw createHttpError(500, 'Income category not found in database');
    }
    categoryId = incomeCategory._id;
  }

  const result = await createTransaction({
    type,
    categoryId,
    date,
    sum,
    comment,
    userId,
  });

  const populatedResult = await result.populate('categoryId', 'title');

  await updateUserBalance(userId, null, { type, sum });

  res.status(201).json(populatedResult);
};
