import { readFileSync } from 'fs';
import { basename, resolve } from 'path';

import { svgo } from './svgo';
import { getFilePaths } from './utils';

export interface Icon {
  name: string;
  path: string;
  svg: string;
}

export const buildIcons = async (svgPath: string): Promise<Icon[]> => {
  const svgFiles = getFilePaths(svgPath);

  return Promise.all(
    svgFiles.map(async path => {
      const rawSvg = readFileSync(path, 'utf-8');
      const svg = await svgo.optimize(rawSvg);

      return {
        name: basename(path),
        path,
        svg: svg.data,
      };
    }),
  );
};
