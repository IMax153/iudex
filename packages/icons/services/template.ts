import { readFileSync } from 'fs';
import { resolve } from 'path';
import camelCase from 'lodash/fp/camelCase';
import pipe from 'lodash/fp/pipe';
import replace from 'lodash/fp/replace';
import upperFirst from 'lodash/fp/upperFirst';

const TEMPLATE_DIR = 'templates';

const stripFileExtension = replace(/(.*)\.\w+$/, '$1');

const toComponentName = pipe(
  stripFileExtension,
  camelCase,
  upperFirst,
  iconName => `${iconName}Icon`,
);

const toReactFileName = pipe(toComponentName, name => `${name}.tsx`);

const getTemplateSource = (templateFile: string) =>
  readFileSync(resolve(process.cwd(), TEMPLATE_DIR, templateFile), { encoding: 'utf-8' });

export const getTemplateHelpers = () => ({
  toComponentName,
  toReactFileName,
  stripFileExtension,
});

export const getTemplates = () => ({
  iconIndex: getTemplateSource('index.icon.ts.ejs'),
  moduleIndex: getTemplateSource('index.module.ts.ejs'),
  icon: getTemplateSource('icon.tsx.ejs'),
  types: getTemplateSource('types.ts.ejs'),
});
