import { Router } from 'express';

import { getUserController } from '../../controllers/user/userCurrentController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/current', ctrlWrapper(getUserController));

export default router;
