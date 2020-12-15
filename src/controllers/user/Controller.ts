import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel'
import IRequest from '../../IRequest';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    login(req: IRequest, res: Response, next: NextFunction) {

        const { email , password } = req.body;
        userModel.findOne({ email: email }, (err, docs) => {
            if (docs) {
                if ( password === docs.password) { 
                   const token = jwt.sign({docs},'qwertyuiopasdfghjklzxcvbnm123456');
                    res.send({
                        data: token,
                        message: 'LoggedIN',
                        status: 200
                    })
                }
                 else {
                    res.send({
                        status: 404,
                        message: 'Password not exists in DB'

                   });
                } 
            }
            else {
                res.send({
                    status: 404,
                    message: 'Email Not Exist in DB'
                });
            };
            const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
            const createToken = jwt.sign({ docs }, secretKey, {expiresIn:'1000s'});
            res.send(createToken);
            req.userData = createToken;
            console.log(req.userData);
        });
    }
    me(req: IRequest, res: Response, next: NextFunction) {
        const data=res.locals;
        console.log(data);

        res.send(data);
    }

    get(req, res, next) {
        try {
            console.log('Inside get method of Trainee Controller');
            res.status(200).json({
                message: 'User Fetched Succesfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        } catch (err) {
            console.log(`Error Occured ${err}`);
        }
    }
    create(req, res, next) {
        try {
            console.log('Inside post method of Trainee Controller');
            res.status(200).json({
                message: 'User Created Succesfully',
                data: [
                    {
                        name: req.body.name,
                        address: 'Noida'
                    }
                ]
            });
        } catch (err) {
            console.log(`Error Occured ${err}`);
        }
    }
    update(req, res, next) {
        try {
            console.log('Inside update method of Trainee Controller');
            res.status(200).json({
                message: 'User Updated Succesfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        } catch (err) {
            console.log(`Error Occured ${err}`);
        }
    }

    delete(req, res, next) {
        try {
            console.log('Inside post method of Trainee Controller');
            res.status(200).json({
                message: 'User Deleted Succesfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        } catch (err) {
            console.log(`Error Occured ${err}`);
        }
    }

}
export default UserController.getInstance();