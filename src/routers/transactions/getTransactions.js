import express from 'express';

import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidID } from '../../middlewares/isValidId.js';
import {
  getTransactionController,
  getTransactionsController,
} from '../../controllers/getTransactionsController.js';

const router = express.Router();

router.get('/', ctrlWrapper(getTransactionsController));

router.get('/:transactionId', isValidID, ctrlWrapper(getTransactionController));

export default router;
