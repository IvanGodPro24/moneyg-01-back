import {
  findUserByEmail,
  updateUserWithToken,
} from '../services/authRegisterService.js';

export const logoutUserController = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await updateUserWithToken(user._id, null);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
