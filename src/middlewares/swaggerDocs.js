import createHttpError from 'http-errors';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import swaggerUI from 'swagger-ui-express';

export const swaggerDocs = (req, res, next) => {
  try {
    const swaggerDoc = JSON.parse(
      readFileSync(path.resolve('docs', 'swagger.json')),
    );

    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)];
  } catch (error) {
    next(createHttpError(500, "Can't load swagger docs:", error));
  }
};
