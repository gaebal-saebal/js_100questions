// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const square = (str) => {
  let n = str.split(" ");
  return parseInt(n[0]) ** parseInt(n[1]);
};

console.log(square("2 2"));
