/* # 문제37 : 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
**학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다. */

function vote(name) {
  let result = name.split(' ');

  let obj = new Object();

  result.forEach((a) => {
    if (obj[a] === undefined) {
      obj[a] = 1;
    } else {
      obj[a] = obj[a] + 1;
    }
  });
  let aa = Object.keys(obj);
  console.log(aa);
  let bb = Object.values(obj);
  console.log(bb);
  const maxValue = Math.max.apply(null, bb); // 투표수
  let index = 0;
  for (let i = 0; i < bb.length; i++) {
    if (bb[i] === maxValue) {
      index = i;
    }
  }
  console.log(aa[index], maxValue);
  console.log(`${aa[index]}(이)가 총 ${maxValue}표로 반장이 되었습니다.`);
}

vote('원범 원범 혜원 혜원 혜원 혜원 유진 유진');
