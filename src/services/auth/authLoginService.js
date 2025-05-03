import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import User from '../../db/model/Users.js';
import { getEnvVar } from '../../utils/getEnvVar.js';

export const updateUserWithToken = async (userId) => {
  const token = jwt.sign({ id: userId }, getEnvVar('JWT_SECRET'), {
    expiresIn: '1d',
  });

  await User.findByIdAndUpdate({ _id: userId }, { token });

  return token;
};

export const loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });

  if (!user) throw createHttpError(401, 'User not found!');

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw createHttpError(401, 'Invalid credentials!');

  const token = await updateUserWithToken(user._id);

  return {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      balance: user.balance,
    },
    token,
  };
};
