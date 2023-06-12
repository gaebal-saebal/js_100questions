/*
# 문제42 : 2020년
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는
함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각
SUN, MON, TUE, WED, THU, FRI, SAT 입니다.
예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열
"SUN"를 반환하세요.
**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

function getDayByDate(month, date) {
  if (parseInt(date, 10) !== date || parseInt(month, 10) !== month) {
    return console.log('정확한 달 또는 일을 입력해주세요');
  } else if (month > 12 || month < 1) {
    return console.log('정확한 달을 입력하세요');
  } else if (
    (month === 1) |
    (month === 3) |
    (month === 5) |
    (month === 7) |
    (month === 8) |
    (month === 10) |
    (month === 12)
  ) {
    if (date > 31) {
      return console.log('정확한 일을 입력하세요');
    }
  } else if ((month === 4) | (month === 6) | (month === 9) | (month === 11)) {
    if (date > 30) {
      return console.log('정확한 일을 입력하세요');
    }
  } else if (month === 2 && date > 29) {
    return console.log('정확한 일을 입력하세요');
  }
  let dayArr = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
  let dateObj = new Date(2020, month - 1, date + 1);
  return dayArr[dateObj.getDay()];
}

console.log(getDayByDate(9, 22));
