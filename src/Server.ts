import * as express from 'express';
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
    }

}
export default Server;