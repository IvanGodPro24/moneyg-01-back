import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { getCategoriesController } from '../../controllers/categories/categoriesController.js';

const router = Router();

router.get('/', ctrlWrapper(getCategoriesController));

export default router;
