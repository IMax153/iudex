import { ValuesOf } from './types';

export const INTENT = {
  NONE: 'none',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export type Intent = ValuesOf<typeof INTENT>;

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type Size = ValuesOf<typeof SIZE>;
