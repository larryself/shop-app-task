import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types';

const initialState: Product[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    handleFavorite: (state, action) => {
      state.push(action.payload)
    },
  },
});
export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
