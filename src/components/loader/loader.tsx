import React, { FC } from 'react';
import { AnimationBox, Animation } from 'components/loader/style';

interface LoaderProps {
  top?: string,
}

export const Loader:FC<LoaderProps> = ({top = '50%'}) => (
  <AnimationBox>
    <Animation top={top}/>
  </AnimationBox>
);

