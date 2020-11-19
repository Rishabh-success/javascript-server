"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasPermission(moduleName, role, permissionType) {
    if (!moduleName.hasOwnProperty(permissionType)) {
        console.log("false");
    }
    else if (moduleName[permissionType].includes(role) || (role == 'head-trainer')) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
exports.default = hasPermission;
//# sourceMappingURL=Permission.js.map