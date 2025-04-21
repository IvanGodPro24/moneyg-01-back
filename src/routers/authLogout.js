import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { logoutController } from '../controllers/authLogoutController.js';

const router = express.Router();

const jsonParser = express.json();

router.post('/logout', jsonParser, ctrlWrapper(logoutController));

export default router;
