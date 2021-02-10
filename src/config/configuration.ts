import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log("inside config", envVars);

<<<<<<< HEAD
const { PORT, NODE_ENV, MONGO_URL, SECRETKEY } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, mongo_url: MONGO_URL, secretKey: SECRETKEY || 'mongodb://localhost:27017/express-training' });
=======
const { PORT, NODE_ENV, MONGO_URL } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, MONGO_URL: MONGO_URL || 'local' });
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
