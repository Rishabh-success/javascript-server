import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';

// const envVars = require('dotenv').config()
const envVars = dotenv.config();
console.log('inside config', envVars);

const { PORT, NODE_ENV } = envVars.parsed;
const config = { port: PORT || 9000, env: NODE_ENV || 'local' };

Object.freeze(config);
export default config;

