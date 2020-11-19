"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDimondShape(size) {
    console.log('Print a diamond with rows ', size);
    let i;
    let j;
    let k;
    let l;
    let str = ' ';
    if (size <= 10 && size >= 2) {
        for (i = 0; i <= size; i++) {
            str = '';
            for (j = size; j > i; j--) {
                str += ' ';
            }
            for (k = 1; k < i; k++) {
                str += '*';
            }
            for (l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
        for (i = size; i >= 0; i--) {
            str = '';
            for (j = size; j > i; j--) {
                str += ' ';
            }
            for (k = 1; k < i; k++) {
                str += '*';
            }
            for (l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
    }
    else
        console.log('wrong input');
}
exports.default = createDimondShape;
//# sourceMappingURL=diamond.js.map