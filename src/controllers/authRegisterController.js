// src\controllers\authRegisterController.js
import createHttpError from 'http-errors';
import {
  createUser,
  findUserByEmail,
} from '../services/authRegisterService.js';

export const registerUserController = async (req, res) => {
  const email = await findUserByEmail(req.body.email);

  if (email) throw createHttpError(409, 'Email in use');

  const newUser = await createUser(req.body);

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};
