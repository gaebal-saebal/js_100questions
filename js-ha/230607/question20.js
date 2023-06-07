/* # 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.** */

// 입출력

// 입력 : 10 2
// 출력 : 5 0

function number(a) {
  // 10 2
  let str = a.split(' '); // "10" "2"
  let b = Number(str[0]);
  let c = Number(str[1]);

  let result = Math.floor(b / c);
  let result2 = b % c;

  console.log(`${result} ${result2}`);
}
number('10 3');
