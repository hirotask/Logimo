import Logger, { LoggerConfig } from './logger';
import { LogLevel } from './logLevel';
import UpperSelector from './logLevel/selector/upperSelector';
import ConsoleTransport from './transports/consoleTransport';

export type DefaultLoggerConfig = Partial<LoggerConfig>;

export const defaultLogLevels: LogLevel = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
} as const;

class DefaultLogger extends Logger {
    constructor(config?: DefaultLoggerConfig) {
        super({
            level:
                config?.level ??
                new UpperSelector({
                    baseLevel: 'info',
                    logLevels: defaultLogLevels,
                }),
            levels: config?.levels ?? defaultLogLevels,
            exitOnError: config?.exitOnError ?? true,
            exceptionHandlers: config?.exceptionHandlers ?? [],
            transports: config?.transports ?? [new ConsoleTransport({})],
        });
    }
}

export default DefaultLogger;
