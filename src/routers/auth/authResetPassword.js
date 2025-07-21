import { Router, json } from 'express';

import { validateBody } from '../../middlewares/validateBody.js';
import {
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../../validation/user.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import {
  requestResetEmailController,
  resetPasswordController,
} from '../../controllers/auth/authResetPasswordController.js';

const router = Router();

const jsonParser = json();

router.post(
  '/request-reset-email',
  jsonParser,
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);

router.post(
  '/reset-password',
  jsonParser,
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

export default router;
