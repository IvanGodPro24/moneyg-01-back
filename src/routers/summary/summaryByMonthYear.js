import { Router, json } from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { summaryByMonthYearSchema } from '../../validation/summary/summaryByMonthYearSchema.js';
import { getSummaryByMonthYearController } from '../../controllers/summary/summaryByMonthYearController.js';

const router = Router();
const jsonParser = json();

router.post(
  '/',
  jsonParser,
  validateBody(summaryByMonthYearSchema),
  ctrlWrapper(getSummaryByMonthYearController),
);

export default router;
