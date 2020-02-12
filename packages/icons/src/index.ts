import fs from 'fs';
import path from 'path';

import { GENERATED_PATH, ICON_PATH, SVG_PATH } from './constants';
import { generateIcons, generateSvgs } from './generators';
import { getFiles, mkdirIfNotExists } from './utils';

mkdirIfNotExists(GENERATED_PATH);
mkdirIfNotExists(ICON_PATH);

const svgFiles = getFiles(SVG_PATH);
const svgs = svgFiles.map(svgFile => ({
  fileName: path.basename(svgFile),
  svg: fs.readFileSync(svgFile),
}));

const generate = async () => {
  await generateSvgs(svgs);

  const iconFiles = getFiles(SVG_PATH);
  const iconNames = iconFiles.map(file => path.basename(file));

  generateIcons(iconNames);
};

try {
  generate();
} catch (error) {
  console.error('There was a problem with icon generation');
  console.error(error);
}
