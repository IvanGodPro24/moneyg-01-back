import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import router from './routers/index.js';
import { checkToken } from './middlewares/checkToken.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use('/api-docs', swaggerDocs());

  const PORT = Number(getEnvVar('PORT', 3000));

  app.use(checkToken, router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
