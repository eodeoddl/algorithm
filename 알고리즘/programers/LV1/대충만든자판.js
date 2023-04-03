// validation 체크할때 시간이 오래걸렸다..
// 풀이 접근 방식은 맞았는데, return 값을 할때 경우의 수를 누락한것이 푸는데 오래걸림.
// 각 target에 대한 유효성 검사가 필요했고 정상적인 target은 정상값을 리턴하는경우와 target이 유효하지않은 경우의 수가
// 혼합 되어있는 경우를 빠르게 떠올리 못했다.
// 47.8 / 100 => 100 / 100
const solution = (keymap, targets) => {
  const keyIndex = keymap.reduce((acc, key) => {
    [...key].forEach((str) => {
      const keyIdx = key.indexOf(str) + 1;
      if (!acc[str]) acc[str] = keyIdx;
      else {
        if (acc[str] > keyIdx) acc[str] = keyIdx;
      }
    });
    return acc;
  }, {});

  // const temp = [...targets.join('')].filter(
  //   (str, i) => targets.join('').indexOf(str) === i
  // );

  const isValid = (target) => {
    const temp = [...new Set(target)];
    return temp.some((str) => !Object.keys(keyIndex).includes(str));
  };

  // const targetsIndexSum = () => targets.map((target) =>
  //   [...target].reduce((acc, str) => acc + keyIndex[str], 0)
  // );

  return targets.map((target) => {
    if (isValid(target)) return -1;
    return [...target].reduce((acc, str) => acc + keyIndex[str], 0);
  });
};

// const result = solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']);
const result = solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);
// const result = solution(['AA'], ['B']);
console.log(result);
