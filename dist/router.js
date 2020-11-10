"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trainee_1 = require("./controllers/trainee");
const mainRouter = express_1.Router();
mainRouter.use('/trainee', trainee_1.traineeRouter);
exports.default = mainRouter;
//# sourceMappingURL=router.js.map