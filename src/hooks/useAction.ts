import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { cartActions, productActions, favoritesActions } from 'store';

const allActions = {
  ...cartActions, ...productActions, ...favoritesActions
}

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch)
}
