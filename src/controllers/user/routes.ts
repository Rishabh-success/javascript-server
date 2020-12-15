import { Router } from 'express';
import UserController from './Controller';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import { getUsers, getDetails } from '../constants';

const UserRouter = Router();
UserRouter.route('/')
   .get(UserController.get)
   .post(UserController.create)
   .put(UserController.update)
   .delete(UserController.delete);

UserRouter.route('/me')
   .get(authMoiddleWare('getUsers', 'all'), UserController.me)

UserRouter.route('/login')
   .post(validationHandler(validation.login), UserController.login);

export default UserRouter;
