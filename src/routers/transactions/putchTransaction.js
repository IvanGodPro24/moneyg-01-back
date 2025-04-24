import express from 'express';
import { updateTransaction } from '../../validation/updateTransactionSchema.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { patchTransaction } from '../../controllers/transactions/patchTransactionController.js';

const router = express.Router();

router.patch(
  '/:trasactionId',
  isValidId,
  validateBody(updateTransaction),
  ctrlWrapper(patchTransaction),
);

export default router;
