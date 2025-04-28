import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import {
  getTransactionController,
  getTransactionsController,
  getTransactionsByCategoryController,
} from '../../controllers/transactions/getTransactionsController.js';

const router = Router();

router.get('/', ctrlWrapper(getTransactionsController));

router.get('/:transactionId', isValidId, ctrlWrapper(getTransactionController));

router.get(
  '/category/:categoryId',
  isValidId,
  ctrlWrapper(getTransactionsByCategoryController),
);

export default router;
