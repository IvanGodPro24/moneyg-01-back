import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { logoutUserController } from '../controllers/authLogoutController.js';

const router = express.Router();

const jsonParser = express.json();

router.post('/logout', jsonParser, ctrlWrapper(logoutUserController));

export default router;
