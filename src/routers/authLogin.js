import express from 'express';

import { validateBody } from '../middlewares/validateBody.js';
import { userLoginSchema } from '../validation/user.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginController } from '../controllers/authLoginController.js';

const router = express.Router();

const jsonParser = express.json();

router.post(
  '/login',
  jsonParser,
  validateBody(userLoginSchema),
  ctrlWrapper(loginController),
);

export default router;
