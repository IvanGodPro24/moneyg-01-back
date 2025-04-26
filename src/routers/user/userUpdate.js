import { Router, json } from 'express';
import { updateUserController } from '../../controllers/user/userUpdateController.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { updateUserSchema } from '../../validation/user.js';

const router = Router();
const jsonParser = json();

router.patch(
  '/update',
  jsonParser,
  validateBody(updateUserSchema),
  ctrlWrapper(updateUserController),
);

export default router;
