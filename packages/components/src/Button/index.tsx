import React, { PropsWithChildren } from 'react';
import { icons, IconName } from '@iudex/icons';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { SPACE_AFTER, SpaceAfter } from '../theme/utils';
import { Loading } from '../Loading';
import { StyledButton, StyledButtonContent, StyledButtonProps, StyledButtonIcon } from './styles';

interface Props {
  startIcon?: IconName;
  endIcon?: IconName;
  intent?: Intent;
  size?: Size;
  spaceAfter?: SpaceAfter;
  type?: 'button' | 'reset' | 'submit';
  dataTest?: string;
  tabIndex?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      startIcon,
      endIcon,
      intent = INTENT.NONE,
      size = SIZE.MEDIUM,
      spaceAfter = SPACE_AFTER.NONE,
      type = 'button',
      dataTest,
      tabIndex = 0,
      disabled = false,
      fullWidth = false,
      loading = false,
      onClick,
      children,
    },
    ref,
  ) => {
    const StartIcon = startIcon ? icons[startIcon] : undefined;
    const EndIcon = endIcon ? icons[endIcon] : undefined;

    return (
      <StyledButton
        data-test={dataTest}
        tabIndex={tabIndex}
        size={size}
        spaceAfter={spaceAfter}
        type={type}
        intent={intent}
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={onClick}
        ref={ref}
      >
        {loading && <Loading variant="button" />}

        {children && (
          <StyledButtonContent loading={loading || undefined}>
            {StartIcon && (
              <StyledButtonIcon intent={intent} size={size}>
                <StartIcon />
              </StyledButtonIcon>
            )}

            {children}

            {EndIcon && (
              <StyledButtonIcon intent={intent} size={size}>
                <EndIcon />
              </StyledButtonIcon>
            )}
          </StyledButtonContent>
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
