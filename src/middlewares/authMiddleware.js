import createHttpError from 'http-errors';
import Session from '../models/Session.js';

export const authMiddleware = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;

  if (!accessToken) {
    return next(new createHttpError.Unauthorized('Access token not provided'));
  }

  try {
    const session = await Session.findOne({ accessToken }).populate('userId');

    if (
      !session ||
      !session.accessTokenValidUntil ||
      session.accessTokenValidUntil <= new Date()
    ) {
      return next(
        new createHttpError.Unauthorized('Invalid or expired access token'),
      );
    }

    req.user = session.userId; // Додаємо інформацію про користувача до об'єкта запиту
    next();
  } catch (error) {
    next(
      new createHttpError.InternalServerError('Error verifying access token'),
    );
  }
};
