import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRegister from './routers/authRegister.js';
import authLogin from './routers/authLogin.js';
import authLogout from './routers/authLogout.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());

  const PORT = Number(getEnvVar('PORT', 3000));

  // app.get('/', (req, res) => {
  //   res.send('hello');
  // });

  app.use('/auth', authRegister);
  app.use('/auth', authLogin);
  app.use('/auth', authLogout);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
