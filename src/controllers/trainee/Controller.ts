<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.findAll(req.body);
            if (!user) {
                next({
                    message: 'trainee Not Fetched',
                    error: 404,
                })
            }
            res.send({
                message: 'trainee fetched successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Fetching trainee'
            })
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const creator = req.headers.user;
            const user = await this.userRepository.create(req.body, creator);
            if (!user) {
                next({
                    message: 'trainee Not Created',
                    error: 404,
                })
            }
            res.send({
                message: 'trainee created successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Creating trainee'
            })
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const user = await this.userRepository.update(data, req.headers.user);
            res.send({
                message: 'trainee updated successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Updating trainee'
            })
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            await this.userRepository.delete(id, req.headers.user);
            res.send({
                message: 'trainee deleted successfully',
                data: req.params.id,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Deleting trainee'
            })
        }
    }
}

export default TraineeController.getInstance();
=======
class traineeController {
  static instance: traineeController

  static getInstance() {
      if (traineeController.instance) {
          return traineeController.instance;
      }
      traineeController.instance = new traineeController();
      return traineeController.instance;
  }

  get(req, res, next) {
      try {
          console.log("Inside get method of Trainee Controller");
          res.status(200).json({
              message: "Trainer fetched succesfully",
              data: [
                  {
                      name: "Rishabh",
                      address: "Noida"
                  }
              ]
          })
      } catch (err) {
          console.log(`Error Occured ${err}`)
      }
  }

  create(req, res, next){
      try{
          console.log("Inside post method of Trainee Controller");
          res.status(200).json({
              message: "Trainee created succesfully",
              data: [
                  {
                      name: "Rishabh",
                      address: "Noida"
                  }
              ]
          })
      } catch (err) {
          console.log(`Error Occured ${err}`)
      }
  }

  update(req, res, next){
      try{

          console.log("Inside update method of Trainee Controller");
          res.status(200).json({
              message: "Trainee updated succesfully",
              data: [
                  {
                      name: "Rishabh",
                      address: "Noida"
                  }
              ]
          })
      } catch (err) {
          console.log(`Error Occured ${err}`)
      }
  }

  delete(req, res, next) {
      try {
          console.log("Inside post method of Trainee Controller");
          res.status(200).json({
              message: "Trainee Deleted succesfully",
              data: [
                  {
                      name: "Rishabh",
                      address: "Noida"
                  }
              ]
          })
      } catch (err) {
          console.log(`Error Occured ${err}`)
      }
  }

}
export default traineeController.getInstance();
>>>>>>> 1b9c0b5d9f11a09e0866dd6eaede51de7efbe72b
