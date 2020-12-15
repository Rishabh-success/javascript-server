import { Router } from 'express';
import { TraineeRouter } from './controllers/trainee';
import { UserRouter } from './controllers/user';

const mainRouter = Router();
mainRouter.use('/trainee', TraineeRouter);
mainRouter.use('/user', UserRouter);
export default mainRouter;