import React, { PropsWithChildren } from 'react';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { getSpaceAfter, SPACE_AFTER, SpaceAfter } from '../theme/utils';
import { Loading } from '../Loading';
import { StyledButton, StyledButtonContent } from './styles';

interface Props {
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
          <StyledButtonContent loading={loading || undefined}>{children}</StyledButtonContent>
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
