import React, { FC, SVGProps } from 'react';
import { COLORS } from 'contants/colors';

export const Cart: FC<SVGProps<SVGSVGElement>> = ({color = COLORS.BLACK}) => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);


