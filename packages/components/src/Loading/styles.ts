import styled, { keyframes } from 'styled-components';
import { css, SystemCssProperties } from '@styled-system/css';
import { variant } from 'styled-system';

import { LoaderVariant, LOADER_VARIANT } from './constants';

interface StyledLoadingProps {
  variant: LoaderVariant;
}

export const StyledSpinningAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledWaveAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: translateY(0px);
  }
  20% {
    opacity: 1;
    transform: translateY(-3px);
  }
  40% {
    opacity: 0.3;
    transform: translateY(0px);
  }
  100% {
    opacity: 0.3;
    transform: translateY(0px);
  }
`;

const loader = variant<SystemCssProperties, LoaderVariant, 'variant'>({
  variants: {
    box: {
      height: '80px',
    },
    button: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
    },
    inline: {
      display: 'inline-flex',
      minHeight: '19px',
      p: 0,
    },
    page: {
      flexDirection: 'column',
      height: '120px',
    },
    search: {
      justifyContent: 'start',
      height: '40px',
    },
  },
});

export const StyledLoading = styled.div<StyledLoadingProps>`
  ${css({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2,
    overflow: 'hidden',
  })}
  ${loader}
`;

export const StyledLoadingCircle = styled.circle<StyledLoadingProps>`
  ${props =>
    css({
      fill: 'transparent',
      stroke: props.variant === LOADER_VARIANT.BUTTON ? 'currentColor' : 'textSecondary',
      strokeWidth: '3px',
      strokeLinecap: 'round',
      strokeDasharray: '128px',
      strokeDashoffset: '64px',
    })}
`;

export const StyledLoadingDot = styled.div`
  ${css({
    width: 1,
    height: 1,
    borderRadius: 2,
    mr: 1,
    bg: 'textSecondary',
    '&:nth-child(2)': {
      animationDelay: '0.1s',
    },
    '&:nth-child(3)': {
      animationDelay: '0.2s',
      m: 0,
    },
  })}
  animation: ${StyledWaveAnimation} 1.25s infinite ease-in-out;
`;

export const StyledLoadingInline = styled.div`
  ${css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

export const StyledLoadingSpinner = styled.svg`
  width: 40px;
  height: 40px;
  animation: ${StyledSpinningAnimation} 0.75s linear infinite;
`;

export const StyledLoadingText = styled.div<StyledLoadingProps>`
  ${props =>
    css({
      mt: props.variant === LOADER_VARIANT.PAGE ? 3 : 0,
      ml: props.variant !== LOADER_VARIANT.PAGE ? 2 : 0,
      color: 'textSecondary',
      fontSize: 1,
      lineHeight: 1.2,
    })}
`;
