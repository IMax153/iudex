import React from 'react';

interface Props {}

export const ChevronLeftIcon: React.FC<Props> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  );
};

ChevronLeftIcon.displayName = 'ChevronLeftIcon';