import { getUser } from '../services/userCurrentService.js';

export const getUserController = async (req, res) => {
  const user = await getUser(req.user._id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};
