import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import User from '../db/model/Users.js';
import Session from '../db/model/Session.js';
import crypto from 'crypto';

export const loginUser = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });
  if (!user) {
    throw new createHttpError.NotFound('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new createHttpError.NotFound('Invalid credentials');
  }

  await Session.deleteOne({ userId: user._id });

  const accessToken = crypto.randomBytes(30).toString('base64');
  const refreshToken = crypto.randomBytes(30).toString('base64');
  const accessTokenValidUntil = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const refreshTokenValidUntil = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const newSession = await Session.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil,
    refreshTokenValidUntil,
  });

  return {
    accessToken: newSession.accessToken,
    refreshToken: newSession.refreshToken,
  };
};
