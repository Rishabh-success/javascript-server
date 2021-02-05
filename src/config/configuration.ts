import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log('inside config', envVars);

const { PORT, NODE_ENV, MONGO_URL, SECRETKEY } = envVars.parsed;
const config = { port: PORT || 9000, env: NODE_ENV , Mongo_url: MONGO_URL, secretKey: SECRETKEY || 'mongodb://localhost:27017/express-training' };

Object.freeze(config);
export default config;

