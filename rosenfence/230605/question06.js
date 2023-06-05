/*
# 문제6 : False

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

1)  NaN
2)  1
3)  ""
4)  0
5)  undefined
*/

//! 정답 : 2
console.log(NaN == true);
console.log(1 == true); // true
console.log('' == true);
console.log(0 == true);
console.log(undefined == true);

//! JS의 falsy한 값
/*
0
-0
0n
""
null
undefined
NaN
8가지를 제외하면 나머지는 싹다 truthy
*/
