//  100 / 100
// 통과는 했는데 너무 많은 시간을 소요했고 문제를 자세히 읽지않아서 조건에대한 혼동이 많이있었다.
// 문제 파악과는 별개로 예외적인 처리에있어서도 많은 시간을 할애했음.. 자체적인 오류에있어서도 빠르게 대처해야할듯.
const solution = (park, routes) => {
  const currentPosition = { x: 0, y: 0 };
  const forbiddenPosition = [];

  // park width is X , park height is Y
  const getStartPosition = () => {
    let i = 0;
    while (i < park.length - 1) {
      if (park[i].includes('S')) {
        currentPosition.x = park[i].indexOf('S');
        currentPosition.y = i;
      }
      if (park[i].includes('X')) {
        [...park[i]].forEach((el, xIndex) => {
          if (el === 'X') forbiddenPosition.push({ y: i, x: xIndex });
        });
      }
      i++;
    }
  };

  const movePosition = () => {
    const move = Array.from(routes, (v) => {
      const [dir, count] = v.split(' ');
      if (dir === 'W') return { dir: 'x', count: Number(count) * -1 };
      else if (dir === 'N') return { dir: 'y', count: Number(count) * -1 };
      else if (dir === 'E') return { dir: 'x', count: Number(count) };
      else if (dir === 'S') return { dir: 'y', count: Number(count) };
    });

    const checkblock = (dir, count) => {
      // 장애물검사
      let res = false;
      const tempPos = { ...currentPosition };
      const crossDir = dir === 'x' ? 'y' : 'x';
      const isPositive = count >= 0;

      for (const fPos of forbiddenPosition) {
        if (tempPos[crossDir] !== fPos[crossDir]) continue;

        if (
          isPositive &&
          tempPos[dir] <= fPos[dir] &&
          fPos[dir] <= tempPos[dir] + count
        ) {
          res = true;
          break;
        }

        if (
          !isPositive &&
          tempPos[dir] + count <= fPos[dir] &&
          fPos[dir] <= tempPos[dir]
        ) {
          res = true;
          break;
        }
      }

      return res;
    };

    const checkOutRange = (dir, count) => {
      let res = false;
      const position = { ...currentPosition };
      const width = park[0].length - 1; // x
      const height = park.length - 1; // y
      position[dir] = position[dir] + count;

      if (position.x > width || position.y > height) res = true;

      return res;
    };

    for (const { dir, count } of move) {
      if (checkOutRange(dir, count) || currentPosition[dir] + count < 0) {
        // out of range
        continue;
      }
      if (checkblock(dir, count)) {
        // blocked
        continue;
      }
      // success to move
      currentPosition[dir] = currentPosition[dir] + count;
    }
  };

  getStartPosition();
  movePosition();

  return [currentPosition.y, currentPosition.x];
};

// const result = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
// const result = solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']);
const result = solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']);
console.log(result);
