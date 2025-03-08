import DefaultLogger from '../lib/defaultLogger';

const logger = new DefaultLogger();

logger.doLog('error', 'Hello world');
logger.doLog('warn', 'Hello world');
logger.doLog('info', 'Hello world');
logger.doLog('http', 'Hello world');
logger.doLog('verbose', 'Hello world');
logger.doLog('baka', 'Hello world');
// =>
// 11:51:08.930 error: Hello world
// 11:51:08.934 warn: Hello world
// 11:51:08.934 info: Hello world
