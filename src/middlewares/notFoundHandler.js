export function notFoundHandler(req, res, _next) {
  res.status(404).json({ status: 404, message: 'Router not found' });
}
