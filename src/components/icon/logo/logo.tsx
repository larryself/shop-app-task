import React, { FC, SVGProps } from 'react';
import { COLORS } from 'contants/colors';

export const Logo: FC<SVGProps<SVGSVGElement>> = ({color = COLORS.RED}) => (
  <svg width={'32'} height={'31'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
    <path
      fillRule={'evenodd'}
      clipRule={'evenodd'}
      d={'M24 6.85A8.5 8.5 0 1 1 9.7.64a16 16 0 0 0 0 29.42 8.5 8.5 0 1 1 10.84.64 16 16 0 0 0 0-30.7A8.49 8.49 0 0 1 24 6.85Z'}
      fill={color}
    />
  </svg>
);


