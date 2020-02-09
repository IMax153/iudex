import { darken, rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';

import { WithTheme } from '../../theme';
import { shadow, insetShadow } from '../../theme/utils';
import { StyledButtonProps } from '../styles';

interface ColorProps {
  bg: string;
  shadow: string;
}

export const buttonStateStyles = (colors: ColorProps) => (props: WithTheme<StyledButtonProps>) => {
  const bgColor = themeGet(colors.bg)(props);
  const boxShadowColor = themeGet(colors.shadow)(props);

  const bg = bgColor;
  const bgHover = darken(0.02, bg);
  const bgActive = darken(0.04, bg);

  const boxShadow = insetShadow(0, 0, 0, 1, boxShadowColor);
  const boxShadowActive = insetShadow(0, 0, 3, 3, rgba(darken(0.2, boxShadowColor), 0.3));

  return {
    bg,
    boxShadow,

    '&:hover': {
      bg: bgHover,
      boxShadow,
    },

    '&:active': {
      bg: bgActive,
      boxShadow: `${boxShadow}, ${boxShadowActive}`,
    },

    '&:focus': {
      boxShadow: shadow(0, 0, 0, 3, rgba(boxShadowColor, 0.5)),

      '&:active': {
        bg: bgActive,
        boxShadow: `${boxShadow}, ${boxShadowActive}`,
      },
    },

    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },

    '&:-moz-focusring, &:focus-visible': {
      boxShadow: insetShadow(0, 0, 6, 3, darken(0.5, boxShadowColor)),
    },
  };
};
