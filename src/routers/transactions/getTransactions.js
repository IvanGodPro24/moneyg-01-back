import { Router } from 'express';

import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import {
  getTransactionController,
  getTransactionsController,
} from '../../controllers/transactions/getTransactionsController.js';

const router = Router();

router.get('/', ctrlWrapper(getTransactionsController));

router.get('/:transactionId', isValidId, ctrlWrapper(getTransactionController));

export default router;
