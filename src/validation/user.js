//src\validation\user.js
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

export const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().max(64).optional(),
  balance: Joi.number().optional(),
  avatarURL: Joi.string().uri().optional(),
}).min(1);
