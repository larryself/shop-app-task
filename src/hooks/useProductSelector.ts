import { useAppSelector } from 'hooks/useAppSelector';
import { createSelector } from '@reduxjs/toolkit';

import { TypeRootState } from 'store/store';

const selector = createSelector((state: TypeRootState) => state.product, (product) => product)
export const useProductSelector = () => {
  const product = useAppSelector(selector);
  return product
}
