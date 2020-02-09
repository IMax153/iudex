import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { INTENT, SIZE } from '../common/constants';
import { SPACE_AFTER } from '../theme/utils';
import { Button } from './index';

const intentOptions = Object.values(INTENT);
const sizeOptions = Object.values(SIZE);
const spaceAfterOptions = Object.values(SPACE_AFTER);

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => {
  const onClick = action('clicked');
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Default');

  return (
    <Button dataTest={dataTest} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Info = () => {
  const onClick = action('clicked');
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Info');

  return (
    <Button intent="info" dataTest={dataTest} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Success = () => {
  const onClick = action('clicked');
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Success');

  return (
    <Button intent="success" dataTest={dataTest} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Warning = () => {
  const onClick = action('clicked');
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Warning');

  return (
    <Button intent="warning" dataTest={dataTest} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Danger = () => {
  const onClick = action('clicked');
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Danger');

  return (
    <Button intent="danger" dataTest={dataTest} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Disabled = () => {
  const onClick = action('clicked');
  const disabled = boolean('Disabled', true);
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Disabled');
  const intent = select('Intent', intentOptions, 'info');

  return (
    <Button intent={intent} dataTest={dataTest} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Loading = () => {
  const onClick = action('clicked');
  const loading = boolean('Loading', true);
  const dataTest = text('DataTest', 'test');
  const children = text('Children', 'Loading');
  const intent = select('Intent', intentOptions, 'info');

  return (
    <Button intent={intent} dataTest={dataTest} loading={loading} onClick={onClick}>
      {children}
    </Button>
  );
};

export const Playground = () => {
  const onClick = action('clicked');
  const disabled = boolean('Disabled', false);
  const fullWidth = boolean('FullWidth', false);
  const loading = boolean('Loading', false);
  const dataTest = text('DataTest', 'test');
  const intent = select('Intent', intentOptions, 'none');
  const size = select('Size', sizeOptions, 'medium');
  const spaceAfter = select('SpaceAfter', spaceAfterOptions, 'none');

  return (
    <Button
      intent={intent}
      size={size}
      spaceAfter={spaceAfter}
      dataTest={dataTest}
      disabled={disabled}
      fullWidth={fullWidth}
      loading={loading}
      onClick={onClick}
    >
      Info
    </Button>
  );
};
