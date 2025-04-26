import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getCategoriesController } from '../controllers/categories/categoriesController.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = express.Router();

router.get('/categories', checkToken, ctrlWrapper(getCategoriesController));

export default router;
