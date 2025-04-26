import { Router } from 'express';
import { updateUserController } from '../../controllers/authUserUpdate.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { checkToken } from '../../middlewares/checkToken.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { updateUserSchema } from '../../validation/user.js';

const router = Router();

router.patch(
  '/update',
  checkToken,
  validateBody(updateUserSchema),
  ctrlWrapper(updateUserController),
);

export default router;
