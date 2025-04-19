import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';

export const setupServer = () => {
  const app = express();

  const PORT = Number(getEnvVar('PORT', 3000));

  app.get('/', (req, res) => {
    res.send('hello');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
