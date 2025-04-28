import createHttpError from 'http-errors';
import { findUserById } from '../services/user/userCurrentService.js';
import jwt from 'jsonwebtoken';
import { getEnvVar } from '../utils/getEnvVar.js';

export const checkToken = async (req, res, next) => {
  const authHeaders = req.get('Authorization');

  if (!authHeaders) {
    next(createHttpError(401, 'AccessToken not found!!!'));
    return;
  }

  const [bearer, token] = authHeaders.split(' ');

  if (bearer !== 'Bearer' || !token) {
    next(createHttpError(401, 'Wrong header or token'));
    return;
  }

  const { id } = jwt.verify(token, getEnvVar('JWT_SECRET'));

  const user = await findUserById(id);

  if (!user) {
    next(createHttpError(401, 'User not found!'));
    return;
  }

  if (user.token !== token) {
    next(createHttpError(401, 'Token is invalid or user is logged out'));
    return;
  }

  req.user = user;

  next();
};
