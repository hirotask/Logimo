import DefaultLogger from '../lib/defaultLogger';
import { LogLevel } from '../lib/logLevel';
import LowerSelector from '../lib/logLevel/selector/lowerSelector';

const customLoglevel: LogLevel = {
    alert: 0,
    error: 1,
    warn: 2,
    notice: 3,
    info: 4,
    trace: 5,
};

const logger = new DefaultLogger({
    levels: customLoglevel,
    levelSelector: new LowerSelector({
        baseLevel: 'trace',
        logLevels: customLoglevel,
    }),
});

logger.doLog('alert', 'Hello world');
logger.doLog('error', 'Hello world');
logger.doLog('warn', 'Hello world');
logger.doLog('notice', 'Hello world');
logger.doLog('info', 'Hello world');
logger.doLog('trace', 'Hello world');
logger.doLog('http', 'Hello world');
// =>
// 11:51:26.046 alert: Hello world
// 11:51:26.049 error: Hello world
// 11:51:26.049 warn: Hello world
// 11:51:26.049 notice: Hello world
// 11:51:26.049 info: Hello world
// 11:51:26.049 trace: Hello world
