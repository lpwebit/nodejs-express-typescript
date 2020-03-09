import AbstractController from '../interfaces/controllers/abstract.controller';
import express from 'express';
import { Inject } from 'typescript-ioc';
import LoggerService from '../service/logger.service';

abstract class BaseController implements AbstractController {

  protected basePath = '/';
  protected router = express.Router();
  @Inject
  protected loggerService: LoggerService;

  getBasePath (): string {
    return this.basePath;
  }

  getRouter (): express.Router {
    return this.router;
  }

}

export default BaseController;
