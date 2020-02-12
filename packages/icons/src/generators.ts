import fs from 'fs';
import path from 'path';

import { GENERATED_PATH, ICON_PATH } from './constants';
import { createSvgComponent } from './svgr';
import { toComponentName, toReactFileName } from './utils';
import { getTemplates, getTemplateHelpers, createTemplateSource } from './templates';

interface SVGObject {
  fileName: string;
  svg: Buffer;
}

export const generateSvgs = async (svgs: SVGObject[]) => {
  for await (const { fileName, svg } of svgs) {
    const icon = await createSvgComponent(svg, toComponentName(fileName));
    const iconFileName = toReactFileName(fileName);

    fs.writeFileSync(path.join(ICON_PATH, iconFileName), icon);
  }
};

export const generateIcons = (iconNames: string[]) => {
  const templates = getTemplates();
  const templateHelpers = getTemplateHelpers();

  const iconIndexSource = createTemplateSource(templates.iconIndex, {
    icons: iconNames,
    ...templateHelpers,
  });

  fs.writeFileSync(path.join(ICON_PATH, 'index.ts'), iconIndexSource);

  const getIconSource = createTemplateSource(templates.getIcon, {
    icons: iconNames,
    ...templateHelpers,
  });

  fs.writeFileSync(path.join(GENERATED_PATH, 'getIcon.ts'), getIconSource);

  const typesSource = createTemplateSource(templates.types, {
    icons: iconNames,
    ...templateHelpers,
  });

  fs.writeFileSync(path.join(GENERATED_PATH, 'types.ts'), typesSource);

  const indexSource = createTemplateSource(templates.index, {});

  fs.writeFileSync(path.join(GENERATED_PATH, 'index.ts'), indexSource);
};
