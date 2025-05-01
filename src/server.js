import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';
import router from './routers/index.js';

export const setupServer = () => {
  const app = express();

  app.use(
    cors({
      origin: ['http://localhost:5173', 'https://moneyg-01-front.onrender.com'],
    }),
  );

  app.use('/api-docs', swaggerDocs());

  const PORT = Number(getEnvVar('PORT', 3000));

  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
