import { loginUser } from '../services/authLoginService.js';

export const loginController = async (req, res, next) => {
  try {
    const userData = req.body;
    const { accessToken, refreshToken } = await loginUser(userData);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
      //   maxAge: 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      //   secure: process.env.NODE_ENV === 'production',
      //   maxAge: 24 * 60 * 60 * 1000,
      //   path: '/api/auth/refresh',
    });

    res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: { message: 'Tokens stored in cookies' },
    });
  } catch (error) {
    next(error);
  }
};
