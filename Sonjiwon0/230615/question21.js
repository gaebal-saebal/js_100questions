/*
# 문제21 : set은 어떻게 만드나요?

// *** Set 객체는 값 콜렉션, 삽입 순서대로 요소를 순회할 수  있음

다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.
*/
// var x = {1, 2, 3, 5, 6, 7};
// var x = {};
var x = new Set("javascript");
// var x = new Set(range(5));
var x = new Set();

console.log(x);
