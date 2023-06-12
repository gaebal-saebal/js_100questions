/* # 문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다. => 2월 29일 존재
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.) */

// 4, 100, 400 나누어 떨어지면 윤년

let date = new Date();
let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a, b) {
  // 1월, 3월, 5월, 7월, 8월, 10월, 12월 => 31일
  // 2월 => 29일
  // 4월, 6월, 9월, 11월 => 30일
  if (a === 1 || a === 3 || a === 5 || a === 7 || a === 8 || a === 10 || a === 12)
    if (b >= 32) {
      return console.log('일을 다시 확인해주세요');
    } else if (a === 2) {
      if (b >= 30) {
        return console.log('일을 다시 확인해주세요');
      }
    } else if (a === 4 || a === 6 || a === 9 || a === 11) {
      if (b >= 31) {
        return console.log('일을 다시 확인해주세요');
      }
    }
  if (a >= 13) {
    return console.log('월을 다시 확인해주세요');
  }
  Number(`2020${a}${b}`);
  let date = new Date(2020, a - 1, b + 1);

  let week = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  console.log(week[date.getDay()]);
}

solution(12, 27);
solution(12, 28);
solution(12, 29);
solution(12, 30);
solution(12, 31);
solution(13, 31);
solution(12, 32);
solution(6, 30);
