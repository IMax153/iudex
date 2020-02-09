import 'styled-components';

import { breakpoints, colors, fonts, fontSizes, fontWeights, radii, sizes, spacing } from './base';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints;
    colors: typeof colors;
    fonts: typeof fonts;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    radii: typeof radii;
    sizes: typeof sizes;
    spacing: typeof spacing;
  }
}
