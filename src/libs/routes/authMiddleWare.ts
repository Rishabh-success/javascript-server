import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permissions';
export default (module: any, permissionType: string) => (req, _res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        if (token ) {
            const user = jwt.verify(token, key);
            const result = hasPermission(module, user.role, permissionType);
            _res.locals.users = user;
            if (!result)
            
                next();
            else {
                next({
                    error: 'Unauthorised access',
                    status: 403,
                    message: 'User is Not authorized'
                });
            }
        } else {
            next({
                error: 'Unauthorised Access',
                message: "Please Provide Token"
            });
        }
    }
    catch (err) {
        next({
            message: err.message
        });
    }
};