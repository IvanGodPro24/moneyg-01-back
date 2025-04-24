import express from 'express';

import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import {
  getTransactionController,
  getTransactionsController,
} from '../../controllers/transactions/getTransactionsController.js';

const router = express.Router();

router.get('/', ctrlWrapper(getTransactionsController));

router.get('/:transactionId', isValidId, ctrlWrapper(getTransactionController));

export default router;
