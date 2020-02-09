import styled from 'styled-components';
import CSS from 'csstype';
import { css, SystemCssProperties } from '@styled-system/css';
import { fontStyle, FontStyleProps, textAlign, TextAlignProps, variant } from 'styled-system';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { getSpaceAfter, SpaceAfter } from '../theme/utils';

interface StyledTextProps {
  fontStyle: CSS.FontStyleProperty;
  intent: Intent | 'secondary';
  size: Size;
  spaceAfter: SpaceAfter;
  textAlign: CSS.TextAlignProperty;
  dataTest?: string;
  bold: boolean;
  uppercase: boolean;
}

const intent = variant<SystemCssProperties, Intent & 'secondary', 'intent'>({
  prop: 'intent',
  variants: {
    [INTENT.NONE]: {
      color: 'text',
    },
    secondary: {
      color: 'textSecondary',
    },
    [INTENT.INFO]: {
      color: 'info',
    },
    [INTENT.SUCCESS]: {
      color: 'success',
    },
    [INTENT.WARNING]: {
      color: 'warning',
    },
    [INTENT.DANGER]: {
      color: 'danger',
    },
  },
});

const size = variant<SystemCssProperties, Size, 'size'>({
  prop: 'size',
  variants: {
    [SIZE.SMALL]: {
      fontSize: 0,
      lineHeight: '16px',
    },
    [SIZE.MEDIUM]: {
      fontSize: 1,
      lineHeight: '20px',
    },
    [SIZE.LARGE]: {
      fontSize: 2,
      lineHeight: '22px',
    },
  },
});

export const StyledText = styled.div<StyledTextProps>`
  ${fontStyle}
  ${intent}
  ${textAlign}
  ${size}
  ${props =>
    css({
      m: 0,
      mb: getSpaceAfter(props.spaceAfter),
      fontWeight: props.bold ? 1 : 0,
      textTransform: props.uppercase ? 'uppercase' : 'none',
    })}
`;
