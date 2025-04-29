import Joi from 'joi';

export const createTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(),
  category: Joi.string().when('type', {
    is: 'expense',
    then: Joi.string()
      .valid(
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
    otherwise: Joi.string().valid('Income').optional(),
  }),
  date: Joi.string().required(),
  sum: Joi.number().required(),
  comment: Joi.string().allow('').optional(),
});
