import createHttpError from 'http-errors';
import User from '../db/model/Users.js';

export const updateUserController = async (req, res) => {
  const { id } = req.user;
  const updates = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    throw createHttpError(404, 'User not found');
  }

  res.json({
    status: 'success',
    data: updatedUser,
  });
};
