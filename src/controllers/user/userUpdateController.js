import createHttpError from 'http-errors';
import { userUpdate } from '../../services/user/userUpdateService.js';
import { saveFileToCloudinary } from '../../utils/saveToCloudinary.js';

export const updateUserController = async (req, res) => {
  const userId = req.user._id;
  const updateData = { ...req.body };

  if (req.body.clearAvatar === 'true') {
    updateData.avatarURL = null;
  } else if (req.file) {
    const avatarURL = await saveFileToCloudinary(req.file);
    updateData.avatarURL = avatarURL;
  }

  const updatedUser = await userUpdate(userId, updateData);

  if (!updatedUser) throw createHttpError(404, 'User not found');

  res.json({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      balance: updatedUser.balance,
      avatarURL: updatedUser.avatarURL,
      registrationDate: updatedUser.createdAt,
    },
  });
};
