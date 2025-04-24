import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use('/api-docs', swaggerDocs());

  const PORT = Number(getEnvVar('PORT', 3000));

  app.use(router);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
