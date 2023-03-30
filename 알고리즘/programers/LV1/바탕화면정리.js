const solution = (wallpaper) => {
  const getStartCoord = wallpaper.reduce((acc, coord, i) => {
    if (coord.includes('#')) acc.push({ y: coord.indexOf('#'), x: i });
    return acc;
  }, []);

  const getEndCoord = wallpaper.reduce((acc, coord, i) => {
    if (coord.includes('#'))
      acc.push({ y: coord.lastIndexOf('#') + 1, x: i + 1 });
    return acc;
  }, []);

  const groupBy = (array, property) => {
    return array.reduce((acc, obj) => {
      const value = obj[property];
      acc.push(value);
      return acc;
    }, []);
  };

  const startX = Math.min(...groupBy(getStartCoord, 'x'));
  const startY = Math.min(...groupBy(getStartCoord, 'y'));
  const endX = Math.max(...groupBy(getEndCoord, 'x'));
  const endY = Math.max(...groupBy(getEndCoord, 'y'));
  return [startX, startY, endX, endY];
};
