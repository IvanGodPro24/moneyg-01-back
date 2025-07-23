import { Router, json } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import {
  getGoogleOAuthUrlController,
  loginWithGoogleController,
} from '../../controllers/auth/authGoogleController.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { loginWithGoogleOAuthSchema } from '../../validation/user.js';

const router = Router();

const jsonParser = json();

router.get('/get-oauth-url', ctrlWrapper(getGoogleOAuthUrlController));

router.post(
  '/confirm-oauth',
  jsonParser,
  validateBody(loginWithGoogleOAuthSchema),
  ctrlWrapper(loginWithGoogleController),
);

export default router;
