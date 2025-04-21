import express from 'express';

import { validateBody } from '../middlewares/validateBody.js';
import { userRegisterSchema } from '../validation/user.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerController } from '../controllers/authRegisterController.js';

const router = express.Router();

const jsonParser = express.json();

router.post(
  '/register',
  jsonParser,
  validateBody(userRegisterSchema),
  ctrlWrapper(registerController),
);

export default router;
