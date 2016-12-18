import express from 'express';
import logger, { name } from './logger';
import expressBunyanLogger from 'express-bunyan-logger';

const app = express();

app.use(expressBunyanLogger({ name }));
app.get('/', helloWorldHandler);

function helloWorldHandler(req, res) {
  logger.debug('working');
  res.json({ working: true });
}

export default app;
