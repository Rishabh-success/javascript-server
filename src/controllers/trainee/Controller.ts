class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req, res, next) {
        try {
            console.log('Inside get method of Trainee Controller');
            res.status(200).json({
                message: 'Trainer Fetched Succesfully',
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
                message: 'Trainee Created Succesfully',
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
                message: 'Trainee Updated Succesfully',
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
                message: 'Trainee Deleted Succesfully',
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
export default TraineeController.getInstance();