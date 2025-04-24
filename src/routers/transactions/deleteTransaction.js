import express from 'express';

import { isValidId } from '../../middlewares/isValidId.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { deleteTransactionController } from '../../controllers/transactions/deleteTransactionController.js';

const router = express.Router();

router.delete(
  '/:transactionId',
  isValidId,
  ctrlWrapper(deleteTransactionController),
);

export default router;
