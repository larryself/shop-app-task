import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { productsApi } from '../product/product';

type ProduceState = {
  open: Product | null,
  products: Product[],
  categories: string[],
  currentCategory: string,
}


export const productSlice = createSlice({
  name: 'product',
  initialState: {open: null, products: [], categories: [], currentCategory: 'All products'} as ProduceState,
  reducers: {
    openCart: (state, {payload}: PayloadAction<Product>) => {
      state.open = payload;
    },
    closeCart: (state) => {
      state.open = null;
    },
    setCategory: (state, {payload}) => {
      state.currentCategory = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, {payload}) => {
        const category = payload.map(el => el.category)
        state.categories = Array.from(new Set(category))
        state.products = payload;
      }
    )
  }
});
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
