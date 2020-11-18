export default function triangle(n: number) {
    for (let i: number = 0; i < n; i++) {
      let str: string = '' ;
      for ( let j: number = 1 ; j < n - i ; j++ ) {
        str = str + ' ';
      }
      for ( let k: number = 1 ; k <= ( 2 * i + 1 ) ; k++ ) {
        str = str + '*';
      }
      console.log(str);
    }
  }