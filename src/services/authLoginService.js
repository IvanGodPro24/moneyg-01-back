import bcrypt from 'bcrypt';
import User from '../db/model/Users.js';
import createHttpError from 'http-errors';
import { updateUserWithToken } from './authRegisterService.js';

export const loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });

  if (!user) {
    throw new createHttpError(401, 'Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new createHttpError(401, 'Invalid credentials');
  }

  const token = await updateUserWithToken(user._id);

  return {
    user: {
      name: user.name,
      email: user.email,
    },
    token: token,
  };
};
