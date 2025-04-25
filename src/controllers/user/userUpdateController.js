import createHttpError from 'http-errors';
import { userUpdate } from '../../services/user/userUpdateService.js';

export const updateUserController = async (req, res) => {
  const updatedUser = await userUpdate(req.user._id, { ...req.body });

  if (!updatedUser) throw createHttpError(404, 'User not found');

  res.json(updatedUser);
};
