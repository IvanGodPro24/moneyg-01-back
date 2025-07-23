import { loginOrSignupWithGoogle } from '../../services/auth/authGoogleService.js';
import { generateAuthUrl } from '../../utils/googleOAuth.js';

export const getGoogleOAuthUrlController = async (req, res) => {
  const url = generateAuthUrl();

  res.json({ message: 'Successfully get Google OAuth url!', url });
};

export const loginWithGoogleController = async (req, res) => {
  const { user, token } = await loginOrSignupWithGoogle(req.body.code);

  res.json({
    user,
    token,
  });
};
