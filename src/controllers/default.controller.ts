import express, { Request, Response } from 'express';
import { Singleton } from 'typescript-ioc';
import BaseController from './base.abstractcontroller';
import BaseResponse from '../dto/response/base.response';

@Singleton
class DefaultController extends BaseController {

  constructor () {
    super();
    this.basePath = '/';
    this.router = express.Router();
    this.intializeRoutes();
  }

  public intializeRoutes () {
    this.router.get(this.basePath, this.index);
  }

  index = (request: Request, response: Response) => {
    try {
      const responseObject: BaseResponse = {
        message: 'hello world',
      };

      response.status(200).send(responseObject);
    } catch (e) {
      this.loggerService.logger.error(e);
      const responseObject: BaseResponse = {
        message: e.message,
      };

      response.status(500).send(responseObject);
    }
  };

}

export default DefaultController;
