import { Router } from 'express';
import authRegister from './auth/authRegister.js';
import authLogin from './auth/authLogin.js';
import authLogout from './auth/authLogout.js';

import getTransactions from './transactions/getTransactions.js';
import createTransaction from './transactions/createTransaction.js';
import deleteTransaction from './transactions/deleteTransaction.js';
import patchTransactions from './transactions/patchTransaction.js';

import userUpdate from './user/userUpdate.js';
import userCurrent from './user/userCurrent.js';
import categoriesRouter from './category/categories.js';
import summaryByMonthYearRouter from './summary/summaryByMonthYear.js';
import { checkToken } from '../middlewares/checkToken.js';

const router = Router();

router.use('/auth', authRegister);
router.use('/auth', authLogin);
router.use('/auth', checkToken, authLogout);

router.use('/transactions', checkToken, getTransactions);
router.use('/transactions', checkToken, createTransaction);
router.use('/transactions', checkToken, deleteTransaction);
router.use('/transactions', checkToken, patchTransactions);

router.use('/categories', checkToken, categoriesRouter);

router.use('/summary', checkToken, summaryByMonthYearRouter);

router.use('/user', checkToken, userCurrent);
router.use('/user', checkToken, userUpdate);

export default router;
