import bcrypt from 'bcrypt';
import User from '../db/model/Users.js';
import jwt from 'jsonwebtoken';
import { getEnvVar } from '../utils/getEnvVar.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const updateUserWithToken = async (userId) => {
  const token = jwt.sign({ id: userId }, getEnvVar('JWT_SECRET'), {
    expiresIn: '1d',
  });
  await User.updateOne({ _id: userId }, { token });
  return token;
};

export const createUser = async (userData) => {
  try {
    const { password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      ...userData,
      password: hashedPassword,
    });
    const token = await updateUserWithToken(user._id);

    return { user: user.toObject(), token };
  } catch (error) {
    console.error('Error created user!', error);
    throw error;
  }
};
