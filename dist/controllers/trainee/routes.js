"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationHandler_1 = require("../../libs/routes/validationHandler");
const validation_1 = require("./validation");
const Controller_1 = require("./Controller");
const authMiddleWare_1 = require("../../libs/routes/authMiddleWare");
const traineeRouter = express_1.Router();
traineeRouter.route('/')
    .get(authMiddleWare_1.default('getUsers', 'read'), validationHandler_1.default(validation_1.default.get), Controller_1.default.get)
    .post(authMiddleWare_1.default('getUsers', 'write'), validationHandler_1.default(validation_1.default.create), Controller_1.default.create)
    .put(authMiddleWare_1.default('getUsers', 'all'), validationHandler_1.default(validation_1.default.update), Controller_1.default.update)
    .delete(authMiddleWare_1.default('getUsers', 'delete'), validationHandler_1.default(validation_1.default.Delete), Controller_1.default.delete);
exports.default = traineeRouter;
//# sourceMappingURL=routes.js.map