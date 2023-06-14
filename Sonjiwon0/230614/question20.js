// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

// 입출력

// 입력 : 10 2
// 출력 : 5 0

const last = (str) => {
  let n = str.split(" ");
  let a = (parseFloat(n[0]) / parseFloat(n[1])).toString();
  let b = (parseFloat(n[0]) % parseFloat(n[1])).toString();
  return a.concat(" ", b);
};

console.log(last("10 2"));
