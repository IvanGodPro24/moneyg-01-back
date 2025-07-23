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
  clearAvatar: Joi.string().optional(),
  registrationDate: Joi.date().required(),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required(),
  token: Joi.string().required(),
});

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required(),
});
