import createHttpError from 'http-errors';

export function validateBody(schema, query = false) {
  return async (req, _res, next) => {
    try {
      await schema.validateAsync(query ? req.query : req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      const errors = error.details.map((detail) => detail.message);

      next(new createHttpError.BadRequest(errors));
    }
  };
}
