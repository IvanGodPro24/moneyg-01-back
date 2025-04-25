import User from '../../db/model/Users.js';

export const userUpdate = (userId, userData) =>
  User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  });
