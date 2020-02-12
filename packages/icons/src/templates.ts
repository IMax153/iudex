import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

import { PRETTIER_CONFIG, TEMPLATE_PATH } from './constants';
import { stripFileExtension, toComponentName, toReactFileName } from './utils';

const getTemplateSource = (templateFile: string) => {
  return fs.readFileSync(path.join(TEMPLATE_PATH, templateFile), { encoding: 'utf-8' });
};

export const getTemplateHelpers = () => ({
  stripFileExtension,
  toComponentName,
  toReactFileName,
});

export const getTemplates = () => ({
  getIcon: getTemplateSource('getIcon.ts.ejs'),
  index: getTemplateSource('index.ts.ejs'),
  iconIndex: getTemplateSource('iconIndex.ts.ejs'),
  types: getTemplateSource('types.ts.ejs'),
});

export const createTemplateSource = (template: string, data: any) => {
  return prettier.format(ejs.render(template, data), {
    ...PRETTIER_CONFIG,
    parser: 'typescript',
  });
};
