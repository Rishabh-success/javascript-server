class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
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