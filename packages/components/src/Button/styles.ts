import styled from 'styled-components';
import { variant } from 'styled-system';
import { css, SystemStyleObject } from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import { darken } from 'polished';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { WithTheme } from '../theme';
import { getSpaceAfter, transition, SpaceAfter } from '../theme/utils';
import { buttonStateStyles } from './helpers';
import { StyledLoadingSpinner } from '../Loading/styles';

export interface StyledButtonProps {
  intent: Intent;
  size: Size;
  spaceAfter: SpaceAfter;
  disabled: boolean;
  fullWidth: boolean;
}

interface StyledButtonContentProps {
  loading?: boolean;
}

interface StyledButtonIconProps {
  intent: Intent;
  size: Size;
}

const intent = (props: WithTheme<StyledButtonProps>) =>
  variant<SystemStyleObject, Intent, 'intent'>({
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

const size = variant<SystemStyleObject, Size, 'size'>({
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

const iconIntent = (props: WithTheme<StyledButtonIconProps>) =>
  variant<SystemStyleObject, Intent, 'intent'>({
    prop: 'intent',
    variants: {
      [INTENT.NONE]: {
        '& > svg': {
          fill: themeGet('colors.text')(props),
        },
      },
      [INTENT.INFO]: {
        '& > svg': {
          fill: themeGet('colors.white')(props),
        },
      },
      [INTENT.SUCCESS]: {
        '& > svg': {
          fill: themeGet('colors.white')(props),
        },
      },
      [INTENT.WARNING]: {
        '& > svg': {
          fill: themeGet('colors.white')(props),
        },
      },
      [INTENT.DANGER]: {
        '& > svg': {
          fill: themeGet('colors.white')(props),
        },
      },
    },
  });

const iconSize = (props: WithTheme<StyledButtonIconProps>) =>
  variant<SystemStyleObject, Size, 'size'>({
    prop: 'size',
    variants: {
      [SIZE.SMALL]: {
        '& > svg': {
          height: themeGet('sizes.2')(props),
          width: themeGet('sizes.2')(props),
        },
      },
      [SIZE.MEDIUM]: {
        '& > svg': {
          height: themeGet('sizes.3')(props),
          width: themeGet('sizes.3')(props),
        },
      },
      [SIZE.LARGE]: {
        '& > svg': {
          height: themeGet('sizes.4')(props),
          width: themeGet('sizes.4')(props),
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

export const StyledButtonIcon = styled.div<StyledButtonIconProps>`
  ${iconIntent}
  ${iconSize}
  ${css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;
