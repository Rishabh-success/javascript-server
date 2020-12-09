import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permissions';
export default (module: any, permissionType: string) => (req, _res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        console.log( token );
            const user = jwt.verify(token, key);
            console.log( user.Role );
            const result = hasPermission(module, user.role, permissionType);
            console.log( 'result is', result );
            if ( result === true )
        next();
    else {
        next ( {
            message: 'Unauthorised',
            status: 403
        } );
    }
    }
    catch ( err ) {
        next ( {
            message: err
        } );
    }
};