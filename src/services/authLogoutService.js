import User from '../db/model/Users.js';

export const logoutUser = async (userId) => {
  await User.findByIdAndUpdate(userId, { token: '' }, { new: true });
};
