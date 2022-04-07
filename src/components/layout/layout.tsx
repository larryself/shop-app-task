import React, { FC } from 'react';
import { useGetProductsQuery } from '../../store/product/product';
import { Loader } from '../loader/loader';

interface LayoutProps {
  children: React.ReactNode
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
