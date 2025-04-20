import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRegister from './routers/auth/authRegister.js';
import authLogin from './routers/auth/authLogin.js';
import authLogout from './routers/auth/authLogout.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());

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
