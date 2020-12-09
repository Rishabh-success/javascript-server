import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';
import TraineeController from './Controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();
traineeRouter.route('/')
   .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
   .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
   .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), TraineeController.update)
   .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.Delete), TraineeController.delete);

export default traineeRouter;
