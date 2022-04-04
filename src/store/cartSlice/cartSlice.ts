import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const currentCart = state.find(cart => cart.id === action.payload.id)
      if (currentCart) {
        currentCart.piece += action.payload.piece
      } else {
        state.push(action.payload)
      }
    },
    setPiece: (state, {payload})=> {
      const currentCart = state.find(cart => cart.id === payload.id)
      if(currentCart){
        currentCart.piece = payload.count
      }
    },
    removeItem: (state, action) => state.filter((cart) => cart.id !== action.payload.id),
  },
});
export const cartReducer = cartSlice.reducer;


export const cartActions = cartSlice.actions;
