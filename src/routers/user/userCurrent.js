// src\routers\user\userCurrent.js
import { Router } from 'express';

import { getUserController } from '../../controllers/userCurrentController.js';
import { checkToken } from '../../middlewares/checkToken.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/current', checkToken, ctrlWrapper(getUserController));

export default router;
