export const shadow = (
  xOffset: number,
  yOffset: number,
  blurRadius: number,
  spreadRadius: number,
  color: string,
) => {
  return `${xOffset}px ${yOffset}px ${blurRadius}px ${spreadRadius}px ${color}`;
};

export const insetShadow = (
  xOffset: number,
  yOffset: number,
  blurRadius: number,
  spreadRadius: number,
  color: string,
) => {
  return `inset ${xOffset}px ${yOffset}px ${blurRadius}px ${spreadRadius}px ${color}`;
};
