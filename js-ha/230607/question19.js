/* # 문제19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요. */

// function number(a, b) {
//   console.log(Math.pow(a, b));
// }

// number(2, 3);

//

let number = 'a b';
let cc = number.split(' ');
console.log(cc[0]);
console.log(Math.pow(Number(cc[0]), Number(cc[1])));
