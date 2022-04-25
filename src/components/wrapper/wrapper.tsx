import React, { FC, ReactNode } from 'react';
import { Wrap } from 'components/wrapper/style';

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({children}) => <Wrap>{children}</Wrap>;
