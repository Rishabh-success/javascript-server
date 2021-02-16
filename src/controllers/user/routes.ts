import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import { Permission } from '../../libs/routes/constants';
import UserController from './Controller';
import { config } from 'dotenv/types';

const UserRouter = express.Router();

UserRouter.route('/me')
    .get(authMiddleWare('getUsers', 'all'),validationHandler(validation.get), UserController.me)

UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);

export default UserRouter;
