import svgr from '@svgr/core';
import { PRETTIER_CONFIG } from './constants';

const template = ({ template }: any, opts: any, { imports, componentName, jsx }: any) => {
  const typescriptTemplate = template.smart({ plugins: ['typescript'] });
  return typescriptTemplate.ast`${imports}

export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => {
  return ${jsx}
}`;
};

const svgrConfig = {
  ext: 'tsx',
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  prettier: true,
  prettierConfig: PRETTIER_CONFIG,
  template,
};

export const createSvgComponent = (svg: Buffer, componentName: string): Promise<any> => {
  return svgr(svg, svgrConfig, { componentName });
};
