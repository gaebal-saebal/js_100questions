/*
# 문제49 : 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
*/

function findMax(str) {
  let arr = str.split(' ').map((e) => {
    return Number(e);
  });
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (result < arr[i]) {
      result = arr[i];
    }
  }
  console.log(result);
}

findMax('10 9 8 7 6 5 4 3 2 1');
findMax('4 2 9 3 2 8');
