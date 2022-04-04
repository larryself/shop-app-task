import React, { FC, ReactNode } from 'react';
import { Wrap } from './style';

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({children}) => <Wrap>{children}</Wrap>;
