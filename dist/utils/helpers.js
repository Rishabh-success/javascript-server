"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(Email) {
    const a = /^([a-zA-Z0-9+_.-]) + @successive.tech+$/;
    const str = Boolean(Email.match(a));
    return str;
}
exports.default = validateEmail;
//# sourceMappingURL=helpers.js.map