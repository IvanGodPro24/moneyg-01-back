import Joi from 'joi';

export const createTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  category: Joi.string()
    .valid(
      'Income',
      'Main expenses',
      'Products',
      'Car',
      'Self care',
      'Child care',
      'Household products',
      'Education',
      'Leisure',
      'Other expenses',
      'Entertainment',
    )
    .required(),

  date: Joi.string().required(),

  sum: Joi.number().required(),

  comment: Joi.string().allow('').optional(),
});
