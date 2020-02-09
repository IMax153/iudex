import { ValuesOf } from '../common/types';

export const TEXT_TAG = {
  DIV: 'div',
  P: 'p',
  SPAN: 'span',
} as const;

export type TextTag = ValuesOf<typeof TEXT_TAG>;
