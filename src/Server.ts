import * as express from 'express';
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
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        });
    }
}
export default Server;
