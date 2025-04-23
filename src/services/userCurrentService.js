import User from '../db/model/Users.js';

export const getUser = async (userId) => {
  const user = await User.findById(userId).select('-password');
  return user;
};
