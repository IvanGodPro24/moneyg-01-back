import Transaction from '../../db/model/transactions.js';

export const getSummaryByMonthYear = async (userId, month, year) => {
  let startDate, endDate;

  if (month) {
    startDate = new Date(Date.UTC(year, month - 1, 1));
    endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
  } else {
    startDate = new Date(Date.UTC(year, 0, 1));
    endDate = new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));
  }

  const transactions = await Transaction.find({
    userId,
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  }).populate('categoryId', 'title');

  const expensesByCategory = {};
  const incomeByCategory = {};
  let totalExpenses = 0;
  let totalIncome = 0;

  transactions.forEach((transaction) => {
    const { type, categoryId, sum } = transaction;

    if (!categoryId || !categoryId.title) return;

    const categoryTitle = categoryId.title;

    if (type === 'expense') {
      expensesByCategory[categoryTitle] =
        (expensesByCategory[categoryTitle] || 0) + sum;
      totalExpenses += sum;
    } else if (type === 'income') {
      incomeByCategory[categoryTitle] =
        (incomeByCategory[categoryTitle] || 0) + sum;
      totalIncome += sum;
    }
  });

  return {
    expenses: {
      byCategory: expensesByCategory,
      total: totalExpenses,
    },
    income: {
      byCategory: incomeByCategory,
      total: totalIncome,
    },
  };
};
