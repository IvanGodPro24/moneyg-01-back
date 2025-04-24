//src\middlewares\errorHandler.js
export function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.name || 'Something went wrong!',
    data: err.message,
  });
}
