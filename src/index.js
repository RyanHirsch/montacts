import logger from './logger';
import app from './app';
const server = app.listen(3000, function() {
  logger.info(`up and listening on port ${server.address().port}`);
});
