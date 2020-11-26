import * as express from 'express';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './router';
import {IConfig}  from './config/IConfig';
import { config } from './config';
class Server {
    private app: express.Express;
    constructor(private config:IConfig) {
        this.app = express();
    }
    bootstrap() {

        this.SetupRoutes();
        return this;
    }
    SetupRoutes() {
        this.app.use('/api', mainRouter);
        this.app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });

        this.app.use(notFoundHandler);

        this.app.use(errorHandler);
        const { app } = this;
        app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });
        return this;
    }
    run() {
        console.log(config);
        const { app, config: { port } } = this;
        app.listen(port)
            
            console.log(`App is running on port ${port}`);
    }
}
export default Server;