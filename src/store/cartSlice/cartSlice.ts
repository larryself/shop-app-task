import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'types';

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      const currentCart = state.find(cart => cart.id === payload.id)
      if (currentCart) {
        currentCart.piece += payload.piece
      } else {
        state.push(payload)
      }
    },
    setPiece: (state, {payload}) => {
      const currentCart = state.find(cart => cart.id === payload.id)
      if (currentCart) {
        currentCart.piece = payload.count
      }
    },
    removeItem: (state, {payload}) => state.filter((cart) => cart.id !== payload.id),
  },
});
export const cartReducer = cartSlice.reducer;


export const cartActions = cartSlice.actions;
