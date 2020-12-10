"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const notFoundRoute_1 = require("./libs/routes/notFoundRoute");
const Database_1 = require("./libs/Database");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
const bodyparser = require("body-parser");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    initBodyParser() {
        this.app.use(bodyparser.json());
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        this.app.use('/api', router_1.default);
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
            next();
        });
        this.app.use(notFoundRoute_1.default);
        this.app.use(routes_1.errorHandler);
        return this;
    }
    run() {
        const { app, config: { port, MONGO_URL } } = this;
        Database_1.default.open('MONGO_URL')
            .then((res) => {
            console.log('Succesfully connected to Mongo');
            app.listen(port, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`App is running on port ${port}`);
                    Database_1.default.disconnect();
                }
            });
        })
            .catch(err => console.log(err));
        return this;
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map