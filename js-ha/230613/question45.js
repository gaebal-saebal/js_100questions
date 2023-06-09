/* # 문제45 : getTime()함수 사용하기

Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 **현재 연도(2023)를 출력해보세요.** */

let time = new Date().getTime();
console.log(time);

// time/1000 초단위
// time/1000/60 분단위
// time/1000/60/60 시단위
// time/1000/60/60/24 일단위

let year = time / 1000 / 60 / 60 / 24 / 365;
console.log(year); // 53년 지남

let result = 1970 + Math.floor(year);
console.log(result);
