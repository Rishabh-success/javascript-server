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

            res.send({
                message: 'Trainee displayed successfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }

    create(req, res, next) {
        try {

            console.log('Inside post method of Trainee Controller');

            res.send({
                message: 'Trainee created  successfully',
                data: [
                    {
                        name: req.body.name,
                        address: req.body.add
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }

    update(req, res, next) {
        try {

            console.log('Inside update method of Trainee Controller');

            res.send({
                message: 'Trainee updated successfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req, res, next) {
        try {
            console.log('Inside delete method of Trainee Controller');
            res.send({
                message: 'Trainee deleted successfully',
                data: [
                    {
                        name: 'Rishabh',
                        address: 'Noida'
                    }
                ]
            });
        }
        catch (err) {
            console.log('Inside err', err);
        }
    }
}

export default TraineeController.getInstance();
