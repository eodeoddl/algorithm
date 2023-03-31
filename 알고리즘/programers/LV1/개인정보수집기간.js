// 보류 런타임에러 결과 65 / 100
// 날짜 계산... 모르겠음

const solution = (today, terms, privacies) => {
  const termInfo = terms.reduce((acc, term) => {
    // 첫번째 생각했던방식
    // const termArr = Array.from(term);
    // termArr.splice(term.indexOf(' '), 1);
    // termArr.push(Number(termArr.splice(1).join('')));
    const termArr = term.split(' ');
    const month = 28;
    const type = termArr[0];
    const period = Number(termArr[1]) * month;
    // 한달을 28일로 계산
    acc[type] = period;
    return acc;
  }, {});

  console.log('termInof => ', termInfo);

  const privacyInfo = privacies.reduce((acc, privacy, i) => {
    const privacyArr = privacy.split(' ');

    const date = privacyArr[0];
    const type = privacyArr[1];
    if (!acc[type]) acc[type] = [];
    acc[type].push({ date, order: i + 1 });
    return acc;
  }, {});

  console.log('privacy info => ', privacyInfo);
  console.log(' today => ', today);
  // 한달 28일
  // 1년 12 * 28

  // 과거 미래일때 계산식이 다름

  const expiredCheck = Object.keys(termInfo).reduce((acc, type) => {
    const [tyear, tmonth, tday] = today.split('.').map((el) => Number(el)); // 현재

    for (const { date, order } of privacyInfo[type]) {
      const [year, month, day] = date.split('.').map((el) => Number(el)); // 과거
      console.log('data e', year, month, day);
      switch (Math.sign(tyear - year)) {
        case 1: {
          // 양수 => 현재 년도가 값이 더 크다. => 과거로부터 현재까지 지난 일 수를구한다.

          const days =
            (12 - month + tmonth + (tyear - year - 1) * 12) * 28 + tday - day;
          console.log(
            '현재년도가 더크다. day and type => ',
            days,
            termInfo[type]
          );

          // 그떄로 부터 지난 일수 days
          if (days >= termInfo[type]) acc.push(order);
          break;
        }
        case -1: {
          // 음수 기간이 남음..
          console.log('음수 경우의 수!!!! ');
          // acc.push()
          break;
        }
        case 0: {
          // 같은년도

          const days = Math.abs(tmonth - month) * 28 + tday - day;
          console.log(
            '같은 년도 days and term => ',
            days,
            termInfo[type],
            Math.abs(tmonth - month),
            tday,
            day
          );
          if (days >= termInfo[type]) acc.push(order);
          break;
        }
      }
    }
    return acc;
  }, []);

  return expiredCheck.sort((a, b) => a - b);
};

// const bb = solution(
//   '2022.05.19',
//   ['A 6', 'B 12', 'C 3'],
//   ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
// );
// console.log(bb);

const a = solution(
  '2020.01.01',
  ['Z 3', 'D 5'],
  [
    '2019.01.01 D',
    '2019.11.15 Z',
    '2019.08.02 D',
    '2019.07.01 D',
    '2018.12.28 Z',
  ]
);

console.log(a);

// 모든달은 28일 까지 있다고 가정.

// 튜플 만들때 문자열 , 숫자 조합이므로 각각 처리를 따로해야됨.
