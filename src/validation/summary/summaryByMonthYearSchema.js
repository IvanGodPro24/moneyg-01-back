import Joi from 'joi';

export const summaryByMonthYearSchema = Joi.object({
  month: Joi.number().min(1).max(12).optional(),
  year: Joi.number().integer().min(2020).required(),
});
