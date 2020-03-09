import express from 'express';

import cors from 'cors';
import helmet from 'helmet';
import ErrorMiddleware from './middleware/error.middleware';
import NotFoundMiddleware from './middleware/notFound.middleware';
import LoggingMiddleware from './middleware/logging.middleware';
import AbstractController from './interfaces/controllers/abstract.controller';
import DefaultController from './controllers/default.controller';
import { Inject } from 'typescript-ioc';
import LoggerService from './service/logger.service';
import { InjectValue } from 'typescript-ioc/dist/decorators';

class App {

  private readonly _app: express.Application;
  @InjectValue('config.port')
  public port: number;

  /**
   * Services
   */
  @Inject
  public logger: LoggerService;

  /**
   * Controllers
   */
  @Inject
  private defaultController: DefaultController;

  /**
   * Middleware
   */
  @Inject
  private loggingMiddleware: LoggingMiddleware;
  @Inject
  private errorMiddleware: ErrorMiddleware;
  @Inject
  private notFoundMiddleware: NotFoundMiddleware;

  constructor () {
    this._app = express();

    const controllers = [
      this.defaultController,
    ];

    this.initializeMiddlewares();
    this.configureCors();
    this.initializeControllers(controllers);
    this.initializeErrorHandler();
  }

  get app (): express.Application {
    return this._app;
  }

  private initializeMiddlewares () {
    this._app.use(express.json());
    this._app.use(this.loggingMiddleware.processRequest.bind(this.loggingMiddleware));
    // Secure our application
    this._app.use(helmet());
  }

  private initializeControllers (controllers: any) {
    controllers.forEach((controller: AbstractController) => {
      this._app.use(controller.getBasePath(), controller.getRouter());
    });
  }

  /**
   * Custom error handler
   */
  private initializeErrorHandler () {
    this._app.use(this.errorMiddleware.processRequest.bind(this.errorMiddleware));
    this._app.use(this.notFoundMiddleware.processRequest.bind(this.notFoundMiddleware));
  }

  public listen () {
    this._app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  /**
   * Enable cors
   */
  private configureCors () {
    // const whitelist = ["http://example1.com", "http://example2.com"];
    const corsOptions = {
      // accept all
      origin: true,
      // single origin check
      // origin: 'http://example.com', // can be string or RegExp
      // dynamic origin check
      // origin: function (origin: string, callback: any) {
      //   if (whitelist.indexOf(origin) !== -1) {
      //     callback(null, true)
      //   } else {
      //     callback(new Error('Not allowed by CORS'))
      //   }
      // },
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    } as any;
    this._app.use(cors(corsOptions));
  }

}

export default App;
