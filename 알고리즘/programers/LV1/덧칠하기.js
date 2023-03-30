// 결과 80.0 / 100.0
const solution = (n, m, section) => {
  const sliceSection = (() => {
    let latestIndex;
    const slicePoint = section.reduce((acc, cur, i) => {
      if (cur - section[i - 1] > m) acc.push(i);
      return acc;
    }, []);

    return slicePoint.length > 0
      ? slicePoint.reduce((acc, idx, loopIdx) => {
          if (loopIdx === slicePoint.length - 1) {
            acc.push(section.slice(latestIndex, idx));
            acc.push(section.slice(idx, section.length + 1));
          } else acc.push(section.slice(latestIndex, idx));
          latestIndex = idx;
          return acc;
        }, [])
      : [section];
  })();

  return sliceSection.reduce((acc, section) => {
    const OriginLength = Array.from({
      length: section.at(-1) - section.at(0) + 1,
    }).length;
    return acc + Math.ceil(OriginLength / m);
  }, 0);
};

// (참고 자료확인후 재작성) 결과 100 / 100
const solution1 = (n, m, section) => {
  let count = 0;
  const allSection = Array.from({ length: n }, () => 0);
  section.forEach((index) => {
    if (!allSection[index]) {
      allSection.splice(index, m, ...Array.from({ length: m }, () => 1));
      count++;
    }
  });
  return count;
};
