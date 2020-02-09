import React from 'react';

interface Props {}

export const ChevronUpIcon: React.FC<Props> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  );
};

ChevronUpIcon.displayName = 'ChevronUpIcon';
