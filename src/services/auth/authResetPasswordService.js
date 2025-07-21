import handlebars from 'handlebars';
import bcrypt from 'bcrypt';
import path from 'node:path';
import fs from 'node:fs/promises';
import createHttpError from 'http-errors';
import User from '../../db/model/Users.js';
import jwt from 'jsonwebtoken';
import { getEnvVar } from '../../utils/getEnvVar.js';
import { sendEmail } from '../../utils/sendMail.js';

export const requestResetToken = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw createHttpError(404, 'User not found!');

  const resetToken = jwt.sign(
    { sub: user._id, email },
    getEnvVar('JWT_SECRET'),
    {
      expiresIn: '15m',
    },
  );

  const resetPasswordTemplatePath = path.join(
    process.cwd(),
    'src',
    'templates',
    'reset-password-email.html',
  );

  const templateSource = (
    await fs.readFile(resetPasswordTemplatePath)
  ).toString();

  const template = handlebars.compile(templateSource);

  const html = template({
    name: user.name,
    link: `${getEnvVar('APP_DOMAIN')}/reset-password?token=${resetToken}`,
    frontendUrl: getEnvVar('APP_FRONT'),
    year: new Date().getFullYear(),
  });

  await sendEmail({
    from: getEnvVar('SMTP_FROM'),
    to: email,
    subject: 'Reset your password',
    html,
  });
};

export const resetPassword = async (payload) => {
  let entries;

  try {
    entries = jwt.verify(payload.token, getEnvVar('JWT_SECRET'));
  } catch (err) {
    if (err instanceof Error) throw createHttpError(401, err.message);
    throw err;
  }

  const user = await User.findOne({ email: entries.email, _id: entries.sub });

  if (!user) throw createHttpError(404, 'User not found!');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  await User.updateOne({ _id: user._id }, { password: encryptedPassword });
};
