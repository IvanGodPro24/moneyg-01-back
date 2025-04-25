import { Router, json } from 'express';

import { createTransactionSchema } from '../../validation/addTransaction.js';
import { createTransactionController } from '../../controllers/transactions/createTransactionController.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();
const jsonParser = json();

router.post(
  '/',
  jsonParser,
  validateBody(createTransactionSchema),
  ctrlWrapper(createTransactionController),
);

export default router;
