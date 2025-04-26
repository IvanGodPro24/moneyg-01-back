import { Router } from 'express';
import { updateTransaction } from '../../validation/updateTransactionSchema.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { patchTransactionController } from '../../controllers/transactions/patchTransactionController.js';

const router = Router();

router.patch(
  '/:trasactionId',
  isValidId,
  validateBody(updateTransaction),
  ctrlWrapper(patchTransactionController),
);

export default router;
