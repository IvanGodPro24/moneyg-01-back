import express from 'express';
import { updateUser } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const userUpdate = express.Router();

userUpdate.patch('/users/:id', authenticate, updateUser);

export default userUpdate;
