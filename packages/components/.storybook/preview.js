import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react'
import { Code } from '@storybook/addon-info/dist/components/markdown'
import jsxToString from 'react-element-to-jsx-string';

import { theme } from '../src/theme';
import { GlobalStyles } from '../src/GlobalStyles';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ComponentPreview = styled.div`
  margin-top: 20px;
`;

addDecorator((storyFn, context) => {
  const children = storyFn(context);
  const code = jsxToString(children);

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        {context.kind}
        {context.parameters?.info}
        {children}
        <ComponentPreview>
          <Code code={code} language="jsx" format={false} />
        </ComponentPreview>
      </Main>
    </ThemeProvider>
  );
});