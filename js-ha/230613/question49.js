/* # 문제49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

function maxnum(num) {
  let arr = num.split(' ');
  console.log(arr);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) > result) {
      result = Number(arr[i]);
    }
  }
  console.log(result);
}

maxnum('10 9 8 7 6 5 4 3 2 1 11 19');
