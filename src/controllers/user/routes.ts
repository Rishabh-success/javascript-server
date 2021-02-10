import * as express from 'express';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation  from './validation'
import validationHandler from '../../libs/routes/validationHandler';
<<<<<<< HEAD
import { Permission } from '../../libs/routes/constants';
import UserController from './Controller';
import { config } from 'dotenv/types';

const UserRouter = express.Router();
UserRouter.route('/:id')
    .delete(authMoiddleWare('getDetails', 'write'), validationHandler(validation.Delete), UserController.delete);
UserRouter.route('/')
    .get(authMoiddleWare('getUsers', 'all'), validationHandler(validation.get), UserController.get)
=======
import UserController from './Controller';
import { getUsers, getDetails } from '../constants';
import { config } from 'dotenv/types';

const UserRouter = express.Router();
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b

UserRouter.route('/')
    .post(authMoiddleWare('getUsers', 'read'), validationHandler(validation.create), UserController.create);

UserRouter.route('/')
    .put(authMoiddleWare('getUsers', 'read'), validationHandler(validation.update), UserController.update);
UserRouter.route('/me')
<<<<<<< HEAD
    .get(authMoiddleWare('getUsers', 'all'),validationHandler(validation.get), UserController.me)

UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);
=======
.get(authMoiddleWare(getUsers, 'all'), UserController.me)

UserRouter.route('/login')
.post( validationHandler(validation.login),UserController.login);
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b

export default UserRouter;
