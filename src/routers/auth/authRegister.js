import { Router, json } from 'express';

import { validateBody } from '../../middlewares/validateBody.js';
import { userRegisterSchema } from '../../validation/user.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { registerUserController } from '../../controllers/auth/authRegisterController.js';

const router = Router();

const jsonParser = json();

router.post(
  '/register',
  jsonParser,
  validateBody(userRegisterSchema),
  ctrlWrapper(registerUserController),
);

export default router;
