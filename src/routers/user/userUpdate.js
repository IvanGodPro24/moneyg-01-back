import { Router } from 'express';
import { updateUserController } from '../../controllers/user/userUpdateController.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { updateUserSchema } from '../../validation/user.js';
import { upload } from '../../utils/uploadMiddleware.js';

const router = Router();

router.patch(
  '/update',
  upload.single('avatarURL'),
  validateBody(updateUserSchema),
  ctrlWrapper(updateUserController),
);

export default router;
