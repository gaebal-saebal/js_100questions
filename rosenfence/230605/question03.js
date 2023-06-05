/*
# 문제3 : 변수의 타입

다음 출력 값으로 올바른 것은?

var arr = [100, 200, 300];
console.log(typeof(arr));

1)  undefined
2)  string
3)  number
4)  object
*/

//! 정답 : 4
//! array를 typeof로 출력할 시 object가 출력됩니다.
//! array임을 확인하기 위해선 Array.isArray() method를 사용하면 배열 유무에 따라 boolean을 받을 수 있습니다.
