import { getAllCategories } from '../../services/categories/categoriesService.js';

export const getCategoriesController = async (req, res) => {
  const categories = await getAllCategories();
  const categoryTitles = categories.map((cat) => cat.title);

  res.json(categoryTitles);
};
