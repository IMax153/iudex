import React from 'react';

import { LOADER_VARIANT, LoaderVariant } from './constants';
import {
  StyledLoading,
  StyledLoadingCircle,
  StyledLoadingDot,
  StyledLoadingInline,
  StyledLoadingSpinner,
  StyledLoadingText,
} from './styles';

interface Props {
  variant?: LoaderVariant;
  dataTest?: string;
  text?: string;
}

export const Loading: React.FC<Props> = ({ variant = LOADER_VARIANT.PAGE, dataTest, text }) => {
  const inlineVariants: LoaderVariant[] = [
    LOADER_VARIANT.BOX,
    LOADER_VARIANT.INLINE,
    LOADER_VARIANT.SEARCH,
  ];

  return (
    <StyledLoading data-test={dataTest} variant={variant}>
      {inlineVariants.includes(variant) ? (
        <StyledLoadingInline>
          <StyledLoadingDot />
          <StyledLoadingDot />
          <StyledLoadingDot />
        </StyledLoadingInline>
      ) : (
        <StyledLoadingSpinner viewBox="0 0 40 40">
          <StyledLoadingCircle cx="50%" cy="50%" r="18" variant={variant} />
        </StyledLoadingSpinner>
      )}

      {variant !== LOADER_VARIANT.BUTTON && (
        <StyledLoadingText variant={variant}>{text}</StyledLoadingText>
      )}
    </StyledLoading>
  );
};

Loading.displayName = 'Loading';
