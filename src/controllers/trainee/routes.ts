import { Router } from 'express';
<<<<<<< HEAD
import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
=======
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation'
import traineeController from './Controller';
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
import authMiddleWare from '../../libs/routes/authMiddleWare';
import config from './validation'

const traineeRouter = Router();
traineeRouter.route('/')
<<<<<<< HEAD
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
traineeRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.Delete), TraineeController.delete);
traineeRouter.route('/')
    .put(authMiddleWare('getUsers', 'all'), validationHandler(Validation.update), TraineeController.update);
=======
   .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), traineeController.get)
   .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), traineeController.create)
   .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), traineeController.update)
   .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.Delete), traineeController.delete);
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b

export default traineeRouter;
