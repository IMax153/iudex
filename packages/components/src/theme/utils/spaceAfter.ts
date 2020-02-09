import { ValuesOf } from '../../common/types';
import { spacing } from '../base/spacing';

export const SPACE_AFTER = {
  NONE: 'none',
  SMALLEST: 'smallest',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  LARGEST: 'largest',
} as const;

export type SpaceAfter = ValuesOf<typeof SPACE_AFTER>;

export const getSpaceAfter = (spaceAfter: SpaceAfter | undefined) => {
  return spaceAfter ? Object.values(SPACE_AFTER).indexOf(spaceAfter) : undefined;
};
