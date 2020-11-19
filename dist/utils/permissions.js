"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    console.log(constants_1.permissions);
    console.log(moduleName);
    const assent = constants_1.permissions[moduleName];
    if (!assent || !assent[permissionType]) {
        return false;
        console.log(`User do not have access of  ${permissionType} type`);
    }
    if (!assent[permissionType].includes(role)) {
        return false;
        console.log(`${role} do not have access of ${permissionType} `);
    }
    return true;
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map