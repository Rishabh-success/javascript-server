import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import UserController from './Controller';
import config from './validation';

const UserRouter = Router();
UserRouter.route('/')
.get(validationHandler(config.get), UserController.get)
.post(validationHandler(config.create), UserController.create)
.put(validationHandler(config.update), UserController.update)
.delete(validationHandler(config.Delete), UserController.delete);

export default UserRouter;
