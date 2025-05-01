import Joi from 'joi';
export const updateTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense'),
  category: Joi.string()
    .when('type', {
      is: 'expense',
      then: Joi.string().valid(
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
    })
    .allow('Income'),
  date: Joi.string(),
  sum: Joi.number(),
  comment: Joi.string().allow('').optional(),
});
