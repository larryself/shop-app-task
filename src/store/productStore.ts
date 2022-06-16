import axios from 'axios';
import { makeAutoObservable, toJS, when } from 'mobx';
import { RootStore } from 'store/store';
import { Product } from 'types';

const baseUrl = 'https://fakestoreapi.com/';

export class ProductStore {
  modalIsOpen: Product | null = null;
  products: Product[] = [];
  categories: string[] = [];
  price: number[] = [];
  rating: number[] = [];
  currentPrice: number[] = [];
  currentRating: number[] = [];
  isFiltering = false;
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    when(() => !this.products.length,
      () => this.fetchAllProducts()
    );
  }

  async fetchAllProducts() {
    if (this.products.length < 1) {
      const res = await axios.get(`${baseUrl}products`);
      this.products = res.data;
      this.categories = Array.from(new Set(res.data.map((item: Product) => item.category)));
    }
    return toJS(this.products);
  }

  get getProducts() {
    return this.products;
  }

  get getRating() {
    return this.rating;
  }

  get getPrice() {
    return this.price;
  }

  get getCurrentRating() {
    return this.currentRating;
  }

  get getCurrentPrice() {
    return this.currentPrice;
  }

  openCart(value: Product | null) {
    return this.modalIsOpen = value;
  }

  closeCart() {
    this.modalIsOpen = null;
  }

  setPrice(price: number[]) {
    this.price = price;
  }

  setRating(payload: number[]) {
    if (payload.length) {
      this.rating = payload;
    }
  }

  setCurrentPrice(payload: number[]) {
    this.currentPrice = payload;
  }

  setCurrentRating(payload: number[]) {
    this.currentRating = payload;
  }

  setLoading(payload: boolean) {
    this.isFiltering = payload;
  }
}
