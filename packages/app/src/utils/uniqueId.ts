const getRandomHexCode = () => {
  return Math.random()
    .toString(16)
    .slice(-4);
};

export const uniqueId = (prefix: string) => {
  return (prefix || '').concat(
    [
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
      getRandomHexCode(),
    ].join(''),
  );
};
