import Joi from 'joi';

export const updateTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense'),
  category: Joi.string().valid(
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
  ),
  date: Joi.string(),
  sum: Joi.number(),
  comment: Joi.string(),
});
