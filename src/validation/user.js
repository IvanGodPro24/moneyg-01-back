import Joi from 'joi';

export const userRegisterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().max(64).required(),
  password: Joi.string().min(8).max(64).required(),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().email().max(64).required(),
  password: Joi.string().min(8).max(64).required(),
});
