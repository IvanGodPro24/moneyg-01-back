import express from 'express';

import { createTransactionShema } from '../../validation/addTransaction.js';
import { createTransactionController } from '../../controllers/transactions/add.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = express.Router();
const jsonParser = express.json();

router.post(
  '/',
  jsonParser,
  validateBody(createTransactionShema),
  ctrlWrapper(createTransactionController),
);

export default router;
