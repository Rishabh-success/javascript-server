import * as express from 'express';
<<<<<<< HEAD
import * as bodyparser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './router';
class Server {
    app
    constructor(private config) {
        this.app = express();
    }
    public initBodyParser() {
        this.app.use(bodyparser.json());
    }
    bootstrap() {
        this.initBodyParser();
=======
    import {IConfig}  from './config/IConfig';
    import { config } from './config';
class Server {
    private app: express.Express;
    constructor(private config:IConfig) {
        this.app = express();
    }
    bootstrap() {
>>>>>>> 8f2b9cf26e392dbb065b3819548211771345b338
        this.SetupRoutes();
        return this;
    }
    SetupRoutes() {
<<<<<<< HEAD
        this.app.use('/api', mainRouter);
        this.app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });

        this.app.use(notFoundHandler);

        this.app.use(errorHandler);
=======
        const { app } = this;
        app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });
>>>>>>> 8f2b9cf26e392dbb065b3819548211771345b338
        return this;

    }
    run() {
<<<<<<< HEAD
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        });
=======
        console.log(config);
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${port}`);
        })
>>>>>>> 8f2b9cf26e392dbb065b3819548211771345b338
    }
}
export default Server;
