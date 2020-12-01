import * as express from 'express';
import { IConfig } from './config/IConfig';
import { config } from './config';
import notFoundRoute from './libs/routes/notFoundRoute'
import {errorHandler} from './libs/routes'
import mainRouter from './router';
import * as bodyparser from 'body-parser';

class Server {
    app;
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
    this.app.use( '/api' , mainRouter );
        this.app.use( '/health-check', ( req, res, next ) => {
            res.send( 'I am Ok' );
            next();
        });
        this.app.use( notFoundRoute );
        this.app.use( errorHandler );
        return this;
    }
    run () {
        const { app , config : {port }} = this;
        app.listen( port , ( err ) => {
            if ( err ) {
            console.log( err );
            }
            console.log( `App is running on port ${ port }` );
        });

    }


}
export default Server;