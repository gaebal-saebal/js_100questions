/*
# 문제50 : 버블정렬 구현하기

버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9

아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다. */

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i; j < i + 2; j++) {
      if (result[j] > result[j + 1]) {
        let mini = result[j + 1]; // 2
        result[j + 1] = result[j];
        result[j] = mini;
        console.log(result);
      }
    }
  }
  return result;
}

const items = [4, 2, 3, 8, 5];

console.log(bubble(items));
