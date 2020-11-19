"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function validateUsers(users) {
    let countValid = 0;
    let countInvalid = 0;
    let a = [];
    let b = [];
    users.forEach(function (item) {
        const { traineeEmail, reviewerEmail } = item;
        if (helpers_1.default(traineeEmail)) {
            a.push(traineeEmail);
            countValid++;
        }
        else {
            b.push(traineeEmail);
            countInvalid++;
        }
        if (helpers_1.default(reviewerEmail)) {
            a.push(reviewerEmail);
            countValid++;
        }
        else {
            b.push(reviewerEmail);
            countInvalid++;
        }
    });
    console.log("Valid is :" + a);
    console.log("invalid is :" + b);
    console.log("Valid: " + countValid + " , Invalid: " + countInvalid);
}
exports.default = validateUsers;
;
//# sourceMappingURL=Validation.js.map