import React from 'react';
import CSS from 'csstype';

import { INTENT, Intent, SIZE, Size } from '../common/constants';
import { SpaceAfter, SPACE_AFTER } from '../theme/utils';
import { TEXT_TAG, TextTag } from './constants';
import { StyledText } from './styles';

interface Props {
  align?: CSS.TextAlignProperty;
  intent?: Intent | 'secondary';
  fontStyle?: CSS.FontStyleProperty;
  size?: Size;
  spaceAfter?: SpaceAfter;
  tag?: TextTag;
  dataTest?: string;
  bold?: boolean;
  uppercase?: boolean;
}

export const Text: React.FC<Props> = ({
  align = 'left',
  intent = INTENT.NONE,
  fontStyle = 'normal',
  size = SIZE.MEDIUM,
  spaceAfter = SPACE_AFTER.NONE,
  tag = TEXT_TAG.DIV,
  dataTest,
  bold = false,
  uppercase = false,
  children,
}) => {
  return (
    <StyledText
      as={tag}
      fontStyle={fontStyle}
      intent={intent}
      size={size}
      spaceAfter={spaceAfter}
      textAlign={align}
      dataTest={dataTest}
      bold={bold}
      uppercase={uppercase}
    >
      {children}
    </StyledText>
  );
};

Text.displayName = 'Text';
