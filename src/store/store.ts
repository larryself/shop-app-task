import { createContext, useContext } from 'react';
import { CartStore } from 'store/cartStore';
import { FavoriteStore } from 'store/favoriteStore';
import { ProductStore } from 'store/productStore';

export class RootStore {
  cartStore: CartStore;
  productStore: ProductStore;
  favoriteStore: FavoriteStore;

  constructor() {
    this.cartStore = new CartStore(this);
    this.productStore = new ProductStore(this);
    this.favoriteStore = new FavoriteStore(this);
  }
}

export const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore);
export const useStore = () => useContext(RootStoreContext);
