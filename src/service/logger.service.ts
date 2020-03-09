import { createLogger, format, Logger, transports } from 'winston';
import { Singleton } from 'typescript-ioc';
import { InjectValue } from 'typescript-ioc/dist/decorators';
import Config from '../interfaces/config/config';

@Singleton
class LoggerService {
  @InjectValue('config')
  public config: Config;

  private readonly _logger: Logger;

  get logger (): Logger {
    return this._logger;
  }

  constructor () {
    let level = 'info';
    if (this.config.env !== 'production') {
      level = 'debug';
    }

    this._logger = createLogger({
      level: level,
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      defaultMeta: { service: this.config.serviceName },
      transports: [
        //
        // - Write to all logs with level `info` and below to `quick-start-combined.log`.
        // - Write all logs error (and below) to `quick-start-error.log`.
        //
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
      ],
    });

    if (this.config.env !== 'production') {
      this._logger.add(new transports.Console({
        format: format.combine(
          format.colorize(),
          format.simple(),
        ),
      }));
    }
  }
}

export default LoggerService;
