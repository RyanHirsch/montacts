import bunyan from 'bunyan';
export const name = 'contacts';

const log = bunyan.createLogger({ name });
export default log;
