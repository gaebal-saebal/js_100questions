/*
# 문제19 : 제곱을 구하자
공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
*/

function getPowers(str) {
  let arr = str.split(' ');
  let numArr = new Array();
  arr.forEach((e) => numArr.push(Number(e)));
  return console.log(Math.pow(numArr[0], numArr[1]));
}

getPowers('2 3');
getPowers('4 4');
getPowers('2 10');
getPowers('3 4');
