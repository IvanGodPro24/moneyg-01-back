import { Router } from 'express';
import { monoCurrencyController } from '../../controllers/currency/monoCurrencyController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(monoCurrencyController));

export default router;
