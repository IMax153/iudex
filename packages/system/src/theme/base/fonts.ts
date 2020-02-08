const fontStack = (fonts: string[]): string => {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ');
};

export const fonts = {
  normal: fontStack(['Open Sans', 'Segoe UI', 'Tahoma', 'sans-serif']),
  mono: fontStack(['PT Mono', 'monospace']),
} as const;
