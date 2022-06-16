import { makeAutoObservable } from 'mobx';
import { RootStore } from 'store/store';
import { Product } from 'types';

const favoritesInitialState: Product[] = [];

export class FavoriteStore {
  favorites = favoritesInitialState;
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  handleFavorite(product: Product) {
    const findProduct = this.favorites.find((favorite) => favorite.id === product.id);
    if (findProduct === undefined) {
      return this.favorites.push(product);
    } else {
      return this.favorites = this.favorites.filter((favorite) => favorite.id !== product.id);
    }
  }

}
