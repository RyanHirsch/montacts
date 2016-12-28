import logger from './utils/logger';
import app from './app';
import startDb from './utils/db';

logger.level('debug');
startDb()
  .then(() => {
    const server = app.listen(3000, function() {
      logger.info(`up and listening on port ${server.address().port}`);
    });
  });
