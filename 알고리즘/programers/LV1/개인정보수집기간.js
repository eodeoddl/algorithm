const solution = (today, terms, privacies) => {
  return terms.reduce((acc, term) => {
    console.log('term => ', Array.from(term));
    const termArr = Array.from(term);
    termArr.splice(term.indexOf(' '), 1);
    acc.push(termArr);
    return acc;
  }, []);
};
const bb = solution('', ['A 6', 'B 12', 'C 3']);
console.log(bb);
// 모든달은 28일 까지 있다고 가정.

// 튜플 만들때 문자열 , 숫자 조합이므로 각각 처리를 따로해야됨.
