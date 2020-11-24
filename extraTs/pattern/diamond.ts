export default function createDimondShape ( size: number ) {
    console.log('Print a diamond with rows ', size);
    let i: number;
    let j: number;
    let k: number;
    let l: number;
    let str: string = ' ';
    if (size <= 10 && size >= 2) {
        for ( i = 0; i <= size; i++) {
            str = '';
            for ( j = size; j > i; j--) {
                str += ' ';
            }
            for ( k = 1; k < i; k++) {
                str += '*';
            }
            for ( l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
        for ( i = size; i >= 0; i--) {
            str = '';
            for ( j = size; j > i; j--) {
                str += ' ';
            }
            for ( k = 1; k < i; k++) {
                str += '*';
            }
            for ( l = 1; l <= i; l++) {
                str += '*';
            }
            console.log(str);
        }
    }
    else console.log('wrong input');
}