import { loginUser } from '../../services/auth/authLoginService.js';

export const loginUserController = async (req, res) => {
  const { user, token } = await loginUser(req.body);

  res.json({
    user,
    token,
  });
};
