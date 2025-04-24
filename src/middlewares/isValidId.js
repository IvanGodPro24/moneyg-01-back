import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidID(req, res, next) {
  const { transactionId } = req.params;

  if (isValidObjectId(transactionId) !== true) {
    return next(new createHttpError.BadRequest('ID is not valid'));
  }

  next();
}
