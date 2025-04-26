import { Router, json } from 'express';
import { updateTransactionSchema } from '../../validation/updateTransactionSchema.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { isValidId } from '../../middlewares/isValidId.js';
import { patchTransactionController } from '../../controllers/transactions/patchTransactionController.js';

const router = Router();
const jsonParser = json();

router.patch(
  '/:transactionId',
  isValidId,
  jsonParser,
  validateBody(updateTransactionSchema),
  ctrlWrapper(patchTransactionController),
);

export default router;
