import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types';
import { productsApi } from '../product/product';

type ProduceState = {
  modalIsOpen: Product | null,
  products: Product[],
  categories: string[],
  price: number[],
  rating: number[],
  currentPrice: number[],
  currentRating: number[],
  isFiltering: boolean,
}
const initialState: ProduceState = {
  modalIsOpen: null,
  products: [],
  categories: [],
  price: [],
  rating: [],
  currentPrice: [],
  currentRating: [],
  isFiltering: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    openCart: (state, {payload}: PayloadAction<Product>) => {
      state.modalIsOpen = payload;
    },
    closeCart: (state) => {
      state.modalIsOpen = null;
    },
    setPrice : (state, {payload}) => {
      state.price = payload;
    },
    setRating : (state, {payload}) => {
      state.rating = payload;
    },
    setCurrentPrice : (state, {payload}) => {
      state.currentPrice = payload
    },
    setCurrentRating: (state, {payload})=> {
      state.currentRating = payload
    },
    setLoading: (state,{payload}) => {
      state.isFiltering = payload
    }
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
