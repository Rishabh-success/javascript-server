import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './router';
import Database from './libs/Database';

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
        return this;

    }
    run() {
        const { app, config: { PORT } } = this;
        Database.open('mongodb://localhost:27017/express-training')
            .then((res) => {
                console.log('Succesfully connected to Mongo');
                app.listen(PORT, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`App is running on port ${PORT}`);
                    Database.disconnect();
                });
            })
    }

}
export default Server;