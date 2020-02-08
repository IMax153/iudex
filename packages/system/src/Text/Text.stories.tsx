import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { INTENT, SIZE } from '../common/constants';
import { SPACE_AFTER } from '../theme/utils';
import { TEXT_TAG } from './constants';
import { Text } from './index';

const alignOptions = ['center', 'left', 'right'] as const;
const intentOptions = [...Object.values(INTENT), 'secondary' as const];
const fontStyleOptions = ['italic', 'normal', 'oblique'] as const;
const sizeOptions = Object.values(SIZE);
const spaceAfterOptions = Object.values(SPACE_AFTER);
const tagOptions = Object.values(TEXT_TAG);

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non mauris a nibh egestas lobortis. Curabitur felis velit, mollis sed metus id, molestie venenatis lectus. Pellentesque condimentum at arcu sed elementum. Cras ac feugiat tellus. Vestibulum aliquet lobortis pharetra. Mauris fermentum fermentum odio eu suscipit.`;

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => {
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text intent="none" dataTest={dataTest}>
      {children}
    </Text>
  );
};

export const Info = () => {
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text intent="info" dataTest={dataTest}>
      {children}
    </Text>
  );
};

export const Success = () => {
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text intent="success" dataTest={dataTest}>
      {children}
    </Text>
  );
};

export const Warning = () => {
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text intent="warning" dataTest={dataTest}>
      {children}
    </Text>
  );
};

export const Danger = () => {
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text intent="danger" dataTest={dataTest}>
      {children}
    </Text>
  );
};

export const Playground = () => {
  const bold = boolean('Bold', false);
  const uppercase = boolean('Uppercase', false);
  const align = select('Align', alignOptions, 'left');
  const fontStyle = select('FontStyle', fontStyleOptions, 'normal');
  const intent = select('Intent', intentOptions, INTENT.NONE);
  const size = select('Size', sizeOptions, SIZE.MEDIUM);
  const spaceAfter = select('SpaceAfter', spaceAfterOptions, SPACE_AFTER.NONE);
  const tag = select('Tag', tagOptions, TEXT_TAG.DIV);
  const children = text('Children', exampleText);
  const dataTest = text('DataTest', 'test');

  return (
    <Text
      align={align}
      fontStyle={fontStyle}
      intent={intent}
      size={size}
      spaceAfter={spaceAfter}
      dataTest={dataTest}
      tag={tag}
      bold={bold}
      uppercase={uppercase}
    >
      {children}
    </Text>
  );
};
