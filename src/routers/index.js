import { Router } from 'express';
import authRegister from './auth/authRegister.js';
import authLogin from './auth/authLogin.js';
import authLogout from './auth/authLogout.js';
import userCurrent from './user/userCurrent.js';
import userUpdateRouter from './user/userUpdate.js';
import userCurrentRouter from './user/userCurrent.js';

const router = Router();

router.use('/auth', authRegister);
router.use('/auth', authLogin);
router.use('/auth', authLogout);

router.use('/user', userCurrent);

router.use('/user', userUpdateRouter);
router.use('/user', userCurrentRouter);

export default router;
