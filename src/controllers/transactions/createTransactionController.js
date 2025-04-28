import createHttpError from 'http-errors';
import { createTransaction } from '../../services/transactions/createTransaction.js';
import Category from '../../db/model/Categories.js';

export const createTransactionController = async (req, res) => {
  const { type, category: categoryTitle, date, sum, comment } = req.body;
  const userId = req.user._id;

  const foundCategory = await Category.findOne({ title: categoryTitle });

  if (!foundCategory) {
    throw createHttpError(
      404,
      `Category with title "${categoryTitle}" not found`,
    );
  }

  const result = await createTransaction({
    type,
    categoryId: foundCategory._id,
    date,
    sum,
    comment,
    userId,
  });

  res.status(201).json(result);
};
