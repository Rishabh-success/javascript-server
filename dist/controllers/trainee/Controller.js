"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class traineeController {
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
            res.send({
                message: "Trainee displayed successfully",
                data: [
                    {
                        name: "Rishabh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    create(req, res, next) {
        try {
            console.log("Inside post method of Trainee Controller");
            res.send({
                message: "Trainee created  successfully",
                data: [
                    {
                        name: req.body.name,
                        address: req.body.add
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    update(req, res, next) {
        try {
            console.log("Inside update method of Trainee Controller");
            res.send({
                message: "Trainee updated successfully",
                data: [
                    {
                        name: "Suresh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    delete(req, res, next) {
        try {
            console.log("Inside delete method of Trainee Controller");
            res.send({
                message: "Trainee deleted successfully",
                data: [
                    {
                        name: "Suresh",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
}
exports.default = traineeController.getInstance();
//# sourceMappingURL=Controller.js.map