import User from '../../db/model/Users.js';

export const logoutUser = (userId) =>
  User.findByIdAndUpdate(userId, { token: '' });
