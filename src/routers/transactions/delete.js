import express from 'express';

import { isValidId } from '../../middlewares/isValidId.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { deletCTransactionController } from '../../controllers/transactions/delete.js';

const router = express.Router();

router.delete('/:id', isValidId, ctrlWrapper(deletCTransactionController));

export default router;
