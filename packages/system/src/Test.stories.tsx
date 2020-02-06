import React from 'react';
import styled from 'styled-components';
import { buttonStyle, ButtonStyleProps, variant } from 'styled-system';

export default {
  title: 'Test',
};

const size = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '8px',
    },
    medium: {
      fontSize: '14px',
    },
    large: {
      fontSize: '24px',
    },
  },
});

const intent = variant({
  prop: 'intent',
  variants: {
    info: {
      backgroundColor: 'blue',
    },
    error: {
      backgroundColor: 'red',
    },
  },
});

const Button = styled.button<{ size: 'small' | 'medium' | 'large' } & ButtonStyleProps>`
  ${size}
  ${buttonStyle}
`;

export const Test = () => {
  return (
    <Button variant="primary" size="large">
      Testing
    </Button>
  );
};
