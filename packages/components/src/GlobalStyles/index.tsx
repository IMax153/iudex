import { createGlobalStyle } from 'styled-components';
import { css } from '@styled-system/css';

export const GlobalStyles = createGlobalStyle`
  ${css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      backgroundColor: 'white',
      color: 'text',
      fontFamily: 'normal',
      fontSize: 2,
      lineHeight: 1.2,
      WebkitFontSmoothing: 'antialiased',
      WebkitTextSizeAdjust: '100%',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      m: 0,
    },
    main: {
      display: 'block',
    },
    h1: {
      fontSize: '2em',
      m: '0.67em 0',
    },
    hr: {
      boxSizing: 'content-box',
      height: 0,
      overflow: 'visible',
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em',
    },
    a: {
      backgroundColor: 'transparent',
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline',
    },
    'b, strong': {
      fontWeight: 2,
    },
    'code, kbd, samp': {
      fontFamily: 'monospace, monospace',
      fontSize: '1em',
    },
    small: {
      fontSize: '80%',
    },
    'sub, sup': {
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline',
    },
    sub: {
      bottom: '-0.25em',
    },
    sup: {
      top: '-0.5em',
    },
    img: {
      borderStyle: 'none',
    },
    'button, input, optgroup, select, textarea': {
      fontFamily: 'inherit',
      fontSize: '100%',
      lineHeight: 1.2,
      m: 0,
    },
    'button, input': {
      overflow: 'visible',
    },
    'button, select': {
      textTransform: 'none',
    },
    'button, [type="button"], [type="reset"], [type="submit"]': {
      WebkitAppearance: 'button' as any,
    },
    'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
      borderStyle: 'none',
      p: 0,
    },
    'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
      outline: '1px dotted ButtonText',
    },
    fieldset: {
      p: '0.35em 0.75em 0.625em',
    },

    legend: {
      boxSizing: 'border-box',
      display: 'table',
      maxWidth: '100%',
      p: 0,
      color: 'inherit',
      whiteSpace: 'normal',
    },
    progress: {
      verticalAlign: 'baseline',
    },
    textarea: {
      overflow: 'auto',
    },
    '[type="checkbox"], [type="radio"]': {
      boxSizing: 'border-box',
      p: 0,
    },
    '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
      height: 'auto',
    },
    '[type="search"]': {
      WebkitAppearance: 'textfield',
      outlineOffset: '-2px',
    },
    '[type="search"]::-webkit-search-decoration': {
      WebkitAppearance: 'none' as any,
    },
    '::-webkit-file-upload-button': {
      font: 'inherit',
      WebkitAppearance: 'button' as any,
    },
    details: {
      display: 'block',
    },
    summary: {
      display: 'list-item',
    },

    template: {
      display: 'none',
    },
    '[hidden]': {
      display: 'none',
    },
  })}
`;
