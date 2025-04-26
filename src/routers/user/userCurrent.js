import { Router } from 'express';

import { getUserController } from '../../controllers/user/userCurrentController.js';
import { checkToken } from '../../middlewares/checkToken.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/current', checkToken, ctrlWrapper(getUserController));

export default router;
