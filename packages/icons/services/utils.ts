import { join } from 'path';
import { readdirSync, statSync } from 'fs';
import concat from 'lodash/fp/concat';
import difference from 'lodash/fp/difference';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';

export const getFilePaths = (dir: string) => {
  const entries = readdirSync(dir, { encoding: 'utf-8' });
  const paths = map<string, string>(entry => join(dir, entry))(entries);
  const filePaths = filter(entryPath => statSync(entryPath).isFile(), paths);
  const dirPaths = difference(paths, filePaths);
  const dirFiles = reduce<string, string[]>(
    (prev, curr) => concat(prev, getFilePaths(curr)),
    [],
  )(dirPaths) as string[];
  return [...filePaths, ...dirFiles];
};
