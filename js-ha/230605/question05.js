/* # 문제5 : for문 계산

다음 코드의 출력 값으로 알맞은 것은?*/

var a = 10;
var b = 2;

// 4번 돌꺼야 +2씩
for (var i = 1; i < 5; i += 2) {
  let result = (a += i); // 11, 14
  console.log(result);
}
console.log(a + b); // => 16
