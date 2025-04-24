import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { transactionId } = req.params;

  if (!isValidObjectId(transactionId)) {
    return next(createHttpError(400, 'ID is not valid'));
  }

  next();
};
