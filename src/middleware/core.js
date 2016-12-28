import { name } from '../utils/logger';
import expressBunyanLogger from 'express-bunyan-logger';
import bodyParser from 'body-parser';

export default function(app) {
  app.use(expressBunyanLogger({ name }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}
