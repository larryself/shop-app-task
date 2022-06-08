import { observer } from 'mobx-react-lite';
import React, { FC, ReactNode } from 'react';
import { Loader } from 'components/loader/loader';
import { useStore } from 'store/store';

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = observer(({ children }) => {
  const { productStore } = useStore();
  return (
    <>
      {children}
      {productStore.getProducts.length < 1 && <Loader/>}
    </>
  );
});
