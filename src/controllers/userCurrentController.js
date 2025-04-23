import createHttpError from 'http-errors';
import { findUserById } from '../services/userCurrentService.js';

export const getUserController = async (req, res) => {
  const user = await findUserById(req.user._id);

  if (!user) throw createHttpError(404, 'User not found');

  res.json({ user: { name: user.name, balance: user.balance } });
};
