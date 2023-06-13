/*
문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.
*/

function to2(num) {
  // num = 6
  let tstr = num.toString(2); // 숫자 -> 문자로 바꾸기 + toString(2) 하면 2진수로 변경해줘요
  console.log(tstr); // tstr = '110'
  let result = parseInt(tstr); // Number(tstr)도 가능
  console.log(result); // result = 110
}

to2(6);
