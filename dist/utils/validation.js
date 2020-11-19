"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function validateUsers(users) {
    const validUser = [];
    const invalidUser = [];
    users.forEach(userData => {
        const { traineeEmail, reviewerEmail } = userData;
        if (helpers_1.default(traineeEmail) && helpers_1.default(reviewerEmail)) {
            validUser.push(userData);
        }
        else {
            invalidUser.push(userData);
        }
    });
    console.log(`${validUser.length}  are valid users:`, validUser);
    console.log(`${invalidUser.length} are invalid users:`, invalidUser);
}
exports.default = validateUsers;
//# sourceMappingURL=validation.js.map