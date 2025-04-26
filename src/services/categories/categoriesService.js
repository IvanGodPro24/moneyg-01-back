import Category from '../../db/model/Categories.js';

export const getAllCategories = async () => {
  return await Category.find();
};

export const findCategoryByTitle = async (title) => {
  return await Category.findOne({ title });
};

export const createCategory = async (data) => {
  return await Category.create(data);
};

export const initializeCategories = async () => {
  const incomeCategory = await findCategoryByTitle('Income');
  if (!incomeCategory) {
    await createCategory({ title: 'Income', type: 'income' });
    console.log('Income category initialized.');
  }

  const expenseCategories = [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
    'Entertainment',
  ];

  for (const categoryTitle of expenseCategories) {
    const existingCategory = await findCategoryByTitle(categoryTitle);
    if (!existingCategory) {
      await createCategory({ title: categoryTitle, type: 'expense' });
      console.log(`Expense category "${categoryTitle}" initialized.`);
    }
  }
};
