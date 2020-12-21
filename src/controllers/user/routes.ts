import { Router } from 'express';
import UserController from './Controller';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import { getUsers, getDetails } from '../constants';
import config from './validation';

const UserRouter = Router();
UserRouter.route('/')
.get(validationHandler(config.get), UserController.get)
.post(validationHandler(config.create), UserController.create)
.put(validationHandler(config.update), UserController.update)
.delete(validationHandler(config.Delete), UserController.delete);

UserRouter.route('/me')
   .get(authMoiddleWare('getUsers', 'all'), UserController.me)

UserRouter.route('/login')
   .post(validationHandler(validation.login), UserController.login);

export default UserRouter;
