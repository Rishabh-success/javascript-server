"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
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
        this.SetupRoutes();
        return this;
    }
    SetupRoutes() {
        this.app.use('/api', router_1.default);
        this.app.get('/health-check', (req, res, next) => {
            res.send('i am ok');
        });
        this.app.use(routes_1.notFoundHandler);
        this.app.use(routes_1.errorHandler);
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
exports.default = Server;
//# sourceMappingURL=Server.js.map