import { logoutUser } from '../services/authLogoutService.js';

export const logoutController = async (req, res, next) => {
  try {
    const accessToken = req.cookies?.accessToken;

    await logoutUser(accessToken);

    res.clearCookie('accessToken', {
      httpOnly: true,
    });
    res.clearCookie('refreshToken', {
      httpOnly: true,
    });

    res.status(200).json({ status: 200, message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
};
