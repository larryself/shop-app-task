import React, { FC, SVGProps } from 'react';
import { COLORS } from 'contants/colors';

export const Twitter: FC<SVGProps<SVGSVGElement>> = ({ color = COLORS.ROSE_RED }) => (
  <svg width={'16'} height={'16'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
    <path
      d={'M15.33 2c-.64.45-1.34.8-2.09 1.02a2.99 2.99 0 0 0-5.24 2v.67a7.1 7.1 0 0 1-6-3.02s-2.67 6 3.33 8.66c-1.37.94-3 1.4-4.66 1.34C6.67 16 14 12.67 14 5a3 3 0 0 0-.05-.55A5.15 5.15 0 0 0 15.33 2v0Z'}
      stroke={color}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
);


