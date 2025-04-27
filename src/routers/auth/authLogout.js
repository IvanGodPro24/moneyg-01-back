import { Router } from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { logoutUserController } from '../../controllers/auth/authLogoutController.js';
import { checkToken } from '../../middlewares/checkToken.js';

const router = Router();

router.post('/', checkToken, ctrlWrapper(logoutUserController));

export default router;
