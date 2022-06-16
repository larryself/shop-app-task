import React, { FC, ReactNode } from 'react';
import { useGetProductsQuery } from 'store';
import { Loader } from 'components/loader/loader';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
  const {isFetching} = useGetProductsQuery();
  return (
    <>
      {children}
      {isFetching && <Loader/>}
    </>
  );
};
