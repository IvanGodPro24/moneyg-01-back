//src\controllers\authUserUpdate.js

import createHttpError from 'http-errors';
import User from '../db/model/Users.js';

export const updateUserController = async (req, res) => {
  const { id } = req.user; // Ідентифікатор користувача з токена.
  const updates = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, updates, {
    new: true, // Повернути оновлений документ.
    runValidators: true, // Виконати перевірку на рівні схеми.
  });

  if (!updatedUser) {
    throw createHttpError(404, 'User not found');
  }

  res.json({
    status: 'success',
    data: updatedUser,
  });
};
