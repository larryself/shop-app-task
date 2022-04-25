import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from 'store/product/product';
import { cartReducer } from 'store/cartSlice/cartSlice';
import { productReducer } from 'store/productSlice/productSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { favoritesReducer } from 'store/favoritesSlice/favoritesSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  favorites: favoritesReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
export type TypeRootState = ReturnType<typeof store.getState>
