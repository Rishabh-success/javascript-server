import * as express from 'express';
import { IConfig } from './config/IConfig';
import notFoundRoute from './libs/routes/notFoundRoute';
import Database from './libs/Database';
import { errorHandler } from './libs/routes';
import mainRouter from './router';
import * as bodyparser from 'body-parser';

class Server {
  private app: any;
  constructor(private config) {
    this.app = express();

  }
  public initBodyParser() {
    this.app.use(bodyparser.json());
  }

  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes() {
    this.app.use('/api', mainRouter);
    this.app.use('/health-check', (req, res, next) => {
      res.send('I am Ok');
      next();
    });
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
    return this;
  }
  run() {
    const { app, config: { port, MONGO_URL } } = this;
    Database.open(MONGO_URL)
      .then((res) => {
        console.log('Succesfully connected to Mongo');
        app.listen(port, (err) => {
          if (err) {
            console.log(err);
          }
          else {
            console.log(`App is running on port ${port}`);
          }
        });
      })
      .catch(err => console.log(err));
    return this;
  }
}
export default Server;
