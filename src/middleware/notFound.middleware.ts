import { NextFunction, Request, Response } from 'express';
import { Inject, Singleton } from 'typescript-ioc';
import LoggerService from '../service/logger.service';
import BaseResponse from '../dto/response/base.response';

@Singleton
class NotFoundMiddleware {
  @Inject
  private loggerService: LoggerService;

  constructor () {
  }

  public processRequest (request: Request, response: Response, next: NextFunction) {
    this.loggerService.logger.warn('Requested url \'%s\' not found', request.url);

    const message = 'Resource not found';

    const obj: BaseResponse = { message: message };

    response.status(404).send(obj);
  }
}

export default NotFoundMiddleware;
