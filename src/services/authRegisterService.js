import bcrypt from 'bcrypt';
import User from '../db/model/Users.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const createUser = async (userData) => {
  const { password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({
    ...userData,
    password: hashedPassword,
  });
};
