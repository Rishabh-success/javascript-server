import * as jwt from 'jsonwebtoken';
import hasPermission1 from './permissions';
export default ( module: any , permissionType: string ) => ( req, res, next ) => {

    try {
    console.log( 'config is', module, permissionType );
    const token = req.headers.authorization;
    console.log( token );
    const User = jwt.verify( token, 'qwertyuiopasdfghjklzxcvbnm123456' );
    console.log( User.Role );
    const result = hasPermission1( module , User.Role , permissionType );
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
