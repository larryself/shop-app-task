import { makeAutoObservable } from 'mobx';
import { RootStore } from 'store/store';
import { Product } from 'types';

const cartInitialState: Product[] = [];


export class CartStore {
  inCart = cartInitialState;
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  addToCart(cart: Product) {
    const currentCart = this.inCart.find((item) => item.id === cart.id);
    if (currentCart) {
      currentCart.piece += cart.piece;
    } else {
      this.inCart.push(cart);
    }
  }

  setPiece(value: { id: number, count: number }) {
    const currentCart = this.inCart.find(cart => cart.id === value.id);
    if (currentCart) {
      currentCart.piece = value.count;
    }
  }

  removeToCart = (id: number) => {
    this.inCart = this.inCart.filter((item) => item.id !== id);
  };

}
