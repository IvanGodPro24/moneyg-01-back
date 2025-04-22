import express from 'express';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { logoutUserController } from '../../controllers/authLogoutController.js';
import { checkToken } from '../../middlewares/checkToken.js';

const router = express.Router();

router.post('/logout', checkToken, ctrlWrapper(logoutUserController));

export default router;
