import express from 'express';
import { updateTransaction } from '../../validation/updateTransactionSchema';
import { validateBody } from '../../middlewares/validateBody';
import { ctrlWrapper } from '../../utils/ctrlWrapper';
import { isValidID } from '../../middlewares/isValidId';
import { patchTransaction } from '../../controllers/patchTransactionController';

const router = express.Router();

router.patch(
  '/:trasactionId',
  isValidID,
  validateBody(updateTransaction),
  ctrlWrapper(patchTransaction),
);
