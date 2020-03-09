import dotenv from 'dotenv';
import { Container } from 'typescript-ioc';
import App from './app';

dotenv.config();

Container.bindName('config').to({
  port: parseInt(process.env.SERVER_PORT || '3000'),
  serviceName: process.env.SERVICE_NAME,
  env: process.env.NODE_ENV,
});

const app = new App();

app.listen();

export default app.app;
