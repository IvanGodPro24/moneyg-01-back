import createHttpError from 'http-errors';
import User from '../../db/model/Users.js';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import {
  getFullNameFromGoogleTokenPayload,
  validateCode,
} from '../../utils/googleOAuth.js';
import { updateUserWithToken } from './authLoginService.js';

export const loginOrSignupWithGoogle = async (code) => {
  const loginTicket = await validateCode(code);
  const payload = loginTicket.getPayload();

  if (!payload) throw createHttpError(401, 'Invalid Google token');

  let user = await User.findOne({ email: payload.email });

  if (!user) {
    const password = await bcrypt.hash(randomBytes(10), 10);

    user = await User.create({
      email: payload.email,
      name: getFullNameFromGoogleTokenPayload(payload),
      password,
      balance: 0,
      avatarURL: payload.picture || '',
    });

    user.avatarURL = payload.picture;
    await user.save();
  }

  const token = await updateUserWithToken(user._id);

  return {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      balance: user.balance,
      avatarURL: user.avatarURL || payload.picture || '',
      registrationDate: user.createdAt,
    },
    token,
  };
};
