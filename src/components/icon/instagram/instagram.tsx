import React, { FC, SVGProps } from 'react';

export const Instagram: FC<SVGProps<SVGSVGElement>> = ({color = '#EF233C'}) => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.33 1.33H4.67a3.33 3.33 0 0 0-3.34 3.34v6.66c0 1.84 1.5 3.34 3.34 3.34h6.66c1.84 0 3.34-1.5 3.34-3.34V4.67c0-1.84-1.5-3.34-3.34-3.34Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"/>
    <path
      d="M10.67 7.58a2.67 2.67 0 1 1-5.28.78 2.67 2.67 0 0 1 5.28-.78ZM11.67 4.33h0"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



