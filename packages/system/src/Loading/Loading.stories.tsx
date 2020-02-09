import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { LOADER_VARIANT } from './constants';
import { Loading } from './index';

const loaderVariantOptions = Object.values(LOADER_VARIANT);

export default {
  title: 'Loading',
  component: Loading,
  decorators: [withKnobs],
};

export const Box = () => {
  const description = text('Text', 'Please wait, the page is loading...');

  return <Loading variant="box" text={description} />;
};

export const Inline = () => {
  const description = text('Text', 'Please wait, the page is loading...');

  return <Loading variant="inline" text={description} />;
};

export const Page = () => {
  const description = text('Text', 'Please wait, the page is loading...');

  return <Loading variant="page" text={description} />;
};

export const Search = () => {
  const description = text('Text', 'Please wait, the page is loading...');

  return <Loading variant="search" text={description} />;
};

export const Playground = () => {
  const dataTest = text('DataTest', 'test');
  const description = text('Text', 'Please wait, the page is loading...');
  const variant = select('Variant', loaderVariantOptions, 'page');

  return <Loading variant={variant} dataTest={dataTest} text={description} />;
};
