import path from 'path';

export const DIRECTORIES = {
  GENERATED: 'generated',
  ICONS: 'generated/icons',
  SVG: 'src/svg',
  TEMPLATES: 'src/templates',
} as const;

export const PRETTIER_CONFIG = {
  bracketSpacing: true,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
} as const;

export const GENERATED_PATH = path.resolve(__dirname, '..', DIRECTORIES.GENERATED);
export const ICON_PATH = path.resolve(__dirname, '..', DIRECTORIES.ICONS);
export const SVG_PATH = path.resolve(__dirname, '..', DIRECTORIES.SVG);
export const TEMPLATE_PATH = path.resolve(__dirname, '..', DIRECTORIES.TEMPLATES);
