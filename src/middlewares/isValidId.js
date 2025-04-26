import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const idToCheck = req.params.transactionId || req.params.categoryId;
  if (!isValidObjectId(idToCheck)) {
    return next(createHttpError(400, 'ID is not valid'));
  }

  next();
};
