import bcrypt from 'bcrypt';
import User from '../../db/model/Users.js';
import createHttpError from 'http-errors';

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new createHttpError.Conflict(
      `User with email '${email}' already exists`,
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();

    return {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    };
  } catch (error) {
    console.error('Error saving user:', error);
    throw new createHttpError.InternalServerError('Failed to create user');
  }
};
