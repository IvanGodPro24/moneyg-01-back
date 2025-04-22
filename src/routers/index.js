import { Router } from 'express';
import authRegister from './auth/authRegister.js';
import authLogin from './auth/authLogin.js';
import authLogout from './auth/authLogout.js';

const router = Router();

router.use('/auth', authRegister);
router.use('/auth', authLogin);
router.use('/auth', authLogout);

export default router;
