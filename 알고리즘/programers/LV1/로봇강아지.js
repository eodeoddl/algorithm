const solution = (park, routes) => {
  const currentPosition = { X: 0, Y: 0 };
  // park width is X , park height is Y
  const getStartPosition = () => {
    let i = 0;
    console.log('TLqkf ', i, park.length);
    while (i < park.length - 1) {
      console.log('inner while ');
      if (park[i].includes('S')) {
        currentPosition.X = park[i].indexOf('S');
        currentPosition.Y = i;
        console.log('break points ');
        return;
      }
      i++;
    }
  };
  getStartPosition();
  console.log('왜?', currentPosition);
};

const result = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']);
