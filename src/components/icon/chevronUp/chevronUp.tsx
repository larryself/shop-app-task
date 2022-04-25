import React, { FC, SVGProps } from 'react';
import { COLORS } from 'contants/colors';

export const ChevronUp: FC<SVGProps<SVGSVGElement>> = ({color = COLORS.BLACK}) => (
<svg width={'16'} height={'16'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
  <path
    d={'M12 10 8 6l-4 4'}
    stroke={color}
    strokeWidth={'2'}
    strokeLinecap={'round'}
    strokeLinejoin={'round'}
  />
</svg>
);


