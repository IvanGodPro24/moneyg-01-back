import Joi from 'joi';

export const createTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  category: Joi.string().required(),
  date: Joi.string().required(),
  sum: Joi.number().required(),
  comment: Joi.string().required(),
});
