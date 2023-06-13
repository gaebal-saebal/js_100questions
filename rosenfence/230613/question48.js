/*
# 문제48 : 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
*/

function makeReverse(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase();
    }
  }
  return console.log(result);
}

makeReverse('AAABBBcccddd');
makeReverse('AaABbBcCcdDd');
