import { ValuesOf } from '../common/types';

export const LOADER_VARIANT = {
  BOX: 'box',
  BUTTON: 'button',
  INLINE: 'inline',
  PAGE: 'page',
  SEARCH: 'search',
} as const;

export type LoaderVariant = ValuesOf<typeof LOADER_VARIANT>;
