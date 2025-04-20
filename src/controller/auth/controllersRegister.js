import { registerUser } from '../../services/auth/serviceRegister.js';

export const registerController = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await registerUser(userData);
    res.status(201).json({
      status: 201,
      message: 'User registered successfully',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
