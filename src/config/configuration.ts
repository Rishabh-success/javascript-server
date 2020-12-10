import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log('inside config', envVars);

const { PORT, NODE_ENV, MONGO_URL } = envVars.parsed;
const config = { port: PORT || 9000, env: NODE_ENV , MONGO_URL: MONGO_URL || 'local' };

Object.freeze(config);
export default config;

