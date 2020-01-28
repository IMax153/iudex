import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Apollo } from '../Apollo';
import { Layout } from '../Layout';

interface Props {}

const fontStack = (fonts: string[]): string => {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ');
};

export const App: React.FC<Props> = ({ children }) => {
  return (
    <Apollo>
      <ThemeProvider
        theme={createMuiTheme({
          palette: {
            primary: {
              main: '#1976d2',
            },
            secondary: {
              main: '#2196f3',
            },
          },
          typography: {
            fontFamily: fontStack([
              'Nunito',
              '-apple-system',
              'BlinkMacSystemFont',
              'Segoe UI',
              'Roboto',
              'Helvetica Neue ',
              'Arial',
              'sans-serif',
              'Apple Color Emoji',
              'Segoe UI Emoji',
              'Segoe UI Symbol',
            ]),
            h1: {
              fontSize: '2rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
            h2: {
              fontSize: '1.75rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
            h5: {
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
            h6: {
              fontSize: '1.0125rem',
              fontWeight: 600,
              lineHeight: 1.2,
            },
          },
        })}
      >
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </Apollo>
  );
};
