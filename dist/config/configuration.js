"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const envVars = dotenv.config();
console.log('inside config', envVars);
const { PORT, NODE_ENV, MONGO_URL } = envVars.parsed;
const config = { port: PORT || 9000, env: NODE_ENV, MONGO_URL: MONGO_URL || 'local' };
Object.freeze(config);
exports.default = config;
//# sourceMappingURL=configuration.js.map