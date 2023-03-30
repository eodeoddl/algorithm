// 알고리즘
const buildList = (length) => Array.from({ length }, (v, i) => i + 1);

const run = (array, length, number) => {
  const list = buildList(length);
  console.log(list);
};

// run(0, 5);

// run([], 7, 3);
