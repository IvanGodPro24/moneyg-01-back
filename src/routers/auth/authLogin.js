import { Router, json } from 'express';

import { validateBody } from '../../middlewares/validateBody.js';
import { userLoginSchema } from '../../validation/user.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { loginUserController } from '../../controllers/auth/authLoginController.js';

const router = Router();

const jsonParser = json();

router.post(
  '/',
  jsonParser,
  validateBody(userLoginSchema),
  ctrlWrapper(loginUserController),
);

export default router;
