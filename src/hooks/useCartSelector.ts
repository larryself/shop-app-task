import { useAppSelector } from 'hooks/useAppSelector';
import { createSelector } from '@reduxjs/toolkit';
import { TypeRootState } from 'store/store';

const selector = createSelector((state: TypeRootState) => state.cart, (cart) => cart)
export const useCartSelector = () => {
  const cart = useAppSelector(selector);
  return cart;
}
