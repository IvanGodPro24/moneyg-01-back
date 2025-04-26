import { getAllCategories } from '../../services/categories/categoriesService.js';

export const getCategoriesController = async (req, res) => {
  const categories = await getAllCategories();

  const incomeCategories = categories
    .filter((cat) => cat.type === 'income')
    .map((cat) => cat.title);
  const expenseCategories = categories
    .filter((cat) => cat.type === 'expense')
    .map((cat) => cat.title);

  res.json({
    status: 200,
    message: 'Successfully retrieved categories!',
    data: {
      income: incomeCategories,
      expense: expenseCategories,
    },
  });
};
