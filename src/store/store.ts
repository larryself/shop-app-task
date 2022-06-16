import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi, cartReducer, favoritesReducer, productReducer } from 'store';
import { setupListeners } from '@reduxjs/toolkit/query';

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
