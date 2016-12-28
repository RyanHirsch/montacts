import mongoose from 'mongoose';
import bluebird from 'bluebird';
import logger from './logger';

const defaultDb = 'montacts';
const defaultHost = 'localhost';

mongoose.Promise = bluebird;
export default function(host = defaultHost, db = defaultDb) {
  return mongoose.connect(`mongodb://${host}/${db}`)
    .catch(err => logger.error('error', err));
}
