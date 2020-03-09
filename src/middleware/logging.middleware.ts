import { Request, Response, NextFunction } from "express";
import { Inject, Singleton } from 'typescript-ioc';
import LoggerService from '../service/logger.service';

@Singleton
class LoggingMiddleware {
  @Inject
  private loggerService: LoggerService;

  constructor() {
  }

  public processRequest(request: Request, response: Response, next: NextFunction) {
    const { rawHeaders, httpVersion, method, socket, url } = request;
    const { remoteAddress, remoteFamily } = socket;

    const requestObject = {
      rawHeaders,
      httpVersion,
      method,
      remoteAddress,
      remoteFamily,
      url
    };

    this.loggerService.logger.info(requestObject);

    next();
  }

}

export default LoggingMiddleware;
