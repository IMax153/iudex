import { render } from 'ejs';
import { outputFile } from 'fs-extra';
import { resolve } from 'path';
import { format } from 'prettier';

import { buildIcons } from './services/icon';
import { getTemplates, getTemplateHelpers } from './services/template';

const createIcons = async () => {
  const srcPath = resolve(process.cwd(), 'src');
  const iconPath = resolve(process.cwd(), 'src', 'icons');
  const svgPath = resolve(process.cwd(), 'svg');
  const unsortedIcons = await buildIcons(svgPath);
  const icons = unsortedIcons.sort((a, b) => a.name.localeCompare(b.name));

  const templates = getTemplates();
  const templateHelpers = getTemplateHelpers();
  const prettierOptions = {
    bracketSpacing: true,
    printWidth: 100,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
  } as const;

  icons.forEach(icon => {
    const iconSourceRaw = render(templates.icon, {
      icon,
      ...templateHelpers,
    });
    const iconSource = format(iconSourceRaw, {
      ...prettierOptions,
      parser: 'typescript',
    });

    const iconComponentFilePath = resolve(iconPath, templateHelpers.toReactFileName(icon.name));

    outputFile(iconComponentFilePath, iconSource);
  });

  const iconIndexSourceRaw = render(templates.iconIndex, {
    icons,
    ...templateHelpers,
  });
  const iconIndexSource = format(iconIndexSourceRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });

  const iconIndexFilePath = resolve(iconPath, 'index.ts');

  outputFile(iconIndexFilePath, iconIndexSource);

  const typesSourceRaw = render(templates.types, {
    icons,
    ...templateHelpers,
  });
  const typesSource = format(typesSourceRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });

  const typesFilePath = resolve(srcPath, 'types.ts');

  outputFile(typesFilePath, typesSource);

  const moduleIndexSourceRaw = render(templates.moduleIndex, {
    icons,
    ...templateHelpers,
  });
  const moduleIndexSource = format(moduleIndexSourceRaw, {
    ...prettierOptions,
    parser: 'typescript',
  });

  const moduleIndexPath = resolve(srcPath, 'index.ts');

  outputFile(moduleIndexPath, moduleIndexSource);
};

createIcons();
