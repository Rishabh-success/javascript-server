import { config } from 'dotenv/types';
import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permissions';
<<<<<<< HEAD
import UserRepository from '../../repositories/user/UserRepository';

=======
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        if (token !== undefined) {
<<<<<<< HEAD
            const decodeUser = jwt.verify(token, key);
            console.log('user is ', decodeUser);
            const userRepository = new UserRepository();
            userRepository.findOne({ id: decodeUser.id })
                .then((userData) => {
                    if (!userData) {
                        throw 'User Not Found';
                    }
                    else if (!hasPermission(module, decodeUser.role, permissionType)) {
                        next({
                            error: 'Unauthorised Access',
                            message: "user are not authorized",
                            status: 403
                        });
                    } else {
                        //req.query = decodeUser.id;
                        req.userDataToken = userData;
                        next();
                    }
                })
                .catch((err) => {
                    next({
                        error: 'user is not found',
                        code: 400
                    });
=======
            const user = jwt.verify(token, key);
            const result = hasPermission(module, user.role, permissionType);
            res.locals.users = user;
            if (!result)

                next();
            else {
                next({
                    error: 'Unauthorised access',
                    status: 403,
                    message: 'User is Not authorized'
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
                });
        } else {
            next({
                error: 'Unauthorised Access',
                message: "Please Provide Token"
            });
        }
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Uthentication Failed',
            status: 403
        });
    }
};
