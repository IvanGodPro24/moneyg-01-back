import { Router } from 'express';
import authRegister from './auth/authRegister.js';
import authLogin from './auth/authLogin.js';
import authLogout from './auth/authLogout.js';

import getTransactions from './transactions/getTransactions.js';
import createTransaction from './transactions/createTransaction.js';
import deleteTransaction from './transactions/deleteTransaction.js';
import patchTransactions from './transactions/patchTransaction.js';

import userUpdateRouter from './user/userUpdate.js';
import userCurrentRouter from './user/userCurrent.js';
import categoriesRouter from './category/categories.js';

const router = Router();

router.use('/register', authRegister);
router.use('/login', authLogin);
router.use('/logout', authLogout);

router.use('/transactions', getTransactions);
router.use('/transactions', createTransaction);
router.use('/transactions', deleteTransaction);
router.use('/transactions', patchTransactions);

router.use('/categories', categoriesRouter);

router.use('/user', userUpdateRouter);
router.use('/user', userCurrentRouter);

export default router;
