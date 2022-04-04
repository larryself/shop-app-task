import React, { FC, SVGProps } from 'react';

export const Minus: FC<SVGProps<SVGSVGElement>> = ({color = '#000'}) => (
  <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.75 9h10.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

