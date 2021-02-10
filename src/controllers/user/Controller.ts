import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import IRequest from '../../IRequest';
<<<<<<< HEAD
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';


=======
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
class UserController {
    static instance: UserController;
    private userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

<<<<<<< HEAD
    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        const user = new UserRepository();
        await user.get({ email })
            .then((userData) => {
                if (userData === null) {
                    next({
                        message: 'User does Not exist',
                        error: 404,
                    });
=======
    login(req: IRequest, res: Response, next: NextFunction) {

        const { email , password } = req.body;
        userModel.findOne({ email: email }, (err, docs) => {
            if (docs) {
                if ( password === docs.password) {
                   const token = jwt.sign({docs},'qwertyuiopasdfghjklzxcvbnm123456');
                    res.send({
                        token: token,
                        message: 'LoggedIN',
                        status: 200
                    })
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
                }

<<<<<<< HEAD
                if (password !== req.body.password) {
                    next({
                        message: 'Password is Invalid',
                        err: 401,

                    });
                }
                const expDate = new Date();
                const payLoad = {
                    name: userData.name,
                    iss: new Date(),
                    exp: expDate.setDate(expDate.getDate() + 7),
                    email: userData.email,
                    role: userData.role
                }
                const token = jwt.sign(payLoad, config.secretKey);
=======
                   });
                }
            }
            else {
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
                res.send({
                    message: 'Login Successfull',
                    status: 200,
                    token: token
                });
            });
    }

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const id = req.query;
        const user = new UserRepository();
        await user.get({ id })
            .then((data) => {
                res.send({
                    message: 'User Fetched successfully',
                    data: data,
                    status: 200
                });
            });
    }

<<<<<<< HEAD
    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.findAll(req.body, {}, {});
            if (!user) {
                next({
                    message: 'Can not Find user',
                    error: 404
                })
            }
            res.send({
                message: 'user fetched successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Fetching User'
            })
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.create(req.body, req.headers.user);
            if (!user) {
                next({
                    message: 'User Not Created',
                    error: 404,
                })
            }
            res.send({
                message: 'user created successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Creating User'
            })
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const user = await this.userRepository.update(id, req.headers.user);
            res.send({
                message: 'user updated successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Updating User'
            })
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            await this.userRepository.delete(id, req.headers.user);
            res.send({
                message: 'user deleted successfully',
                data: id,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Deleting User'
            })
=======
    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of Trainee');
            res.send({
                message: 'User created succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of Trainee');
            res.send({
                message: 'Trainee updated succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside delete method of Trainee');
            res.send({
                message: 'Trainee deleted succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
        }
    }
}

export default UserController.getInstance();
