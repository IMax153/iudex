import { DefaultTheme } from 'styled-components';

import { breakpoints, colors, fonts, fontSizes, fontWeights, radii, sizes, spacing } from './base';

export const theme: DefaultTheme = {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  sizes,
  spacing,
} as const;

export type WithTheme<T> = T & { theme: DefaultTheme };
