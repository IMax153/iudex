import fs from 'fs';
import path from 'path';
import camelCase from 'lodash/fp/camelCase';
import concat from 'lodash/fp/concat';
import difference from 'lodash/fp/difference';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import replace from 'lodash/fp/replace';
import upperFirst from 'lodash/fp/upperFirst';

export const mkdirIfNotExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

export const getFiles = (dir: string) => {
  const entries = fs.readdirSync(dir, { encoding: 'utf-8' });
  const paths = map<string, string>(entry => path.join(dir, entry))(entries);
  const filePaths = filter(entryPath => fs.statSync(entryPath).isFile(), paths);
  const dirPaths = difference(paths, filePaths);
  const dirFiles = reduce<string, string[]>(
    (prev, curr) => concat(prev, getFiles(curr)),
    [],
  )(dirPaths) as string[];
  return [...filePaths, ...dirFiles];
};

export const stripFileExtension = replace(/(.*)\.\w+$/, '$1');

export const toComponentName = pipe(
  stripFileExtension,
  camelCase,
  upperFirst,
  iconName => `${iconName}Icon`,
);

export const toReactFileName = pipe(toComponentName, name => `${name}.tsx`);
