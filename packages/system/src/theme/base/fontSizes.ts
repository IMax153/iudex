type FontSizes = Array<number> & {
  display: number;
  body: number;
};

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 56] as FontSizes;

/* eslint-disable prefer-destructuring */
fontSizes.display = fontSizes[6];
fontSizes.body = fontSizes[1];
/* eslint-enable prefer-destructuring */
