import styled from 'styled-components';
import { variant } from 'styled-system';
import { css, SystemCssProperties } from '@styled-system/css';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { WithTheme } from '../theme';
import { getSpaceAfter, transition, SpaceAfter } from '../theme/utils';
import { buttonStateStyles } from './helpers';
import { StyledLoadingSpinner } from '../Loading/styles';

export interface StyledButtonProps {
  intent: Intent;
  size: Size;
  spaceAfter?: SpaceAfter;
  disabled: boolean;
  fullWidth: boolean;
}

interface StyledButtonContentProps {
  loading?: boolean;
}

const intent = (props: WithTheme<StyledButtonProps>) =>
  variant<SystemCssProperties, Intent, 'intent'>({
    prop: 'intent',
    variants: {
      [INTENT.NONE]: {
        color: 'text',
        ...buttonStateStyles({
          bg: 'colors.white',
          shadow: 'colors.textSecondary',
        })(props),
      },
      [INTENT.INFO]: {
        bg: 'info',
        color: 'white',
        ...buttonStateStyles({
          bg: 'colors.info',
          shadow: 'colors.info',
        })(props),
      },
      [INTENT.SUCCESS]: {
        color: 'white',
        ...buttonStateStyles({
          bg: 'colors.success',
          shadow: 'colors.success',
        })(props),
      },
      [INTENT.WARNING]: {
        color: 'white',
        ...buttonStateStyles({
          bg: 'colors.warning',
          shadow: 'colors.warning',
        })(props),
      },
      [INTENT.DANGER]: {
        bg: 'error',
        color: 'white',
        ...buttonStateStyles({
          bg: 'colors.danger',
          shadow: 'colors.danger',
        })(props),
      },
    },
  });

const size = variant<SystemCssProperties, Size, 'size'>({
  prop: 'size',
  variants: {
    [SIZE.SMALL]: {
      height: 3,
      px: 2,
      fontSize: 0,
      [`${StyledLoadingSpinner}`]: {
        height: 2,
        width: 2,
      },
    },
    [SIZE.MEDIUM]: {
      height: 4,
      px: 2,
      fontSize: 1,
      [`${StyledLoadingSpinner}`]: {
        height: 2,
        width: 2,
      },
    },
    [SIZE.LARGE]: {
      height: 5,
      px: 3,
      fontSize: 2,
      [`${StyledLoadingSpinner}`]: {
        height: 3,
        width: 3,
      },
    },
  },
});

export const StyledButton = styled.button<StyledButtonProps>`
  ${intent}
  ${size}
  ${props =>
    css({
      position: 'relative',
      boxSizing: 'border-box',
      flex: props.fullWidth ? '1 1 auto' : '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: props.fullWidth ? '100%' : 'auto',
      maxWidth: '100%',
      mb: getSpaceAfter(props.spaceAfter),
      fontWeight: 1,
      borderRadius: 1,
      border: 0,
      outline: 0,
      transition: transition(['all'], 'fast'),
      opacity: props.disabled ? 0.5 : 1,
      cursor: props.disabled ? 'not-allowed' : 'pointer',
    })}
`;

export const StyledButtonContent = styled.div<StyledButtonContentProps>`
  ${props =>
    css({
      flexBasis: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      visibility: props.loading ? 'hidden' : 'visible',
    })}
`;
