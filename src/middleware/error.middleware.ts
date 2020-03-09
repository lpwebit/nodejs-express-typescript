import HttpException from '../common/http-exception';
import { NextFunction, Request, Response } from 'express';
import { Inject, Singleton } from 'typescript-ioc';
import LoggerService from '../service/logger.service';
import BaseResponse from '../dto/response/base.response';

@Singleton
class ErrorMiddleware {
  @Inject
  private loggerService: LoggerService;

  constructor () {
  }

  public processRequest (error: HttpException, request: Request, response: Response, next: NextFunction) {
    this.loggerService.logger.error(error);

    const status = error.statusCode || 500;
    const message =
      error.message || 'It\'s not you. It\'s us. We are having some problems.';

    const obj: BaseResponse = { message: message };

    response.type('json').status(status).send(obj);
  }
}

export default ErrorMiddleware;
