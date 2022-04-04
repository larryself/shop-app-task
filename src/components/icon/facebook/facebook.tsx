import React, { FC, SVGProps } from 'react';

export const Facebook: FC<SVGProps<SVGSVGElement>> = ({color = '#EF233C'}) => (
  <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 1.3334h-2a3.3333 3.3333 0 0 0-3.3334 3.3333v2h-2v2.6667h2v5.3333h2.6667V9.3334h2L12 6.6667H9.3333v-2A.6667.6667 0 0 1 10 4h2V1.3334Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

