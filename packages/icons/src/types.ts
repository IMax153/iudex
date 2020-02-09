import React from 'react';

export type IconName = 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up';

export type Icons = Record<IconName, React.FC<{}>>;
