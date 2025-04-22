import createHttpError from 'http-errors';
import {
  createUser,
  findUserByEmail,
} from '../services/authRegisterService.js';

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw new createHttpError(409, 'Email in use');
  }
  const newUser = await createUser(req.body);

  res.status(201).json({
    user: {
      name: newUser.user.name,
      email: newUser.user.email,
    },
    token: newUser.token,
  });
};
