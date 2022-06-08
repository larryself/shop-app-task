import { useEffect, useState } from 'react';
import { useStore } from 'store/store';
import { Product } from 'types';

export const useProducts = (categoryName: string | string[] | undefined) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { productStore } = useStore();
  const currentPrice = productStore.getCurrentPrice;
  const currentRating = productStore.getCurrentRating;
  const products = productStore.getProducts;
  const getPrice = (products: Product[]) => {
    const price = products.map(product => product.price);
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    return [minPrice, maxPrice];
  };

  const getRating = (products: Product[]) => {
    const rating = products.map(product => product.rating.rate);
    const minRating = Math.min(...rating);
    const maxRating = Math.max(...rating);
    return [minRating, maxRating];
  };

  const getProducts = () => {
    return categoryName ? products.filter(product => product.category === categoryName) : products;
  };

  const sortProduct = (products: Product[], rating: number[], price: number[]) => {
    const sortedByPrice = products.filter(product => product.price >= price[0] && product.price <= price[1]);
    const sortedByRating = sortedByPrice.filter(product => product.rating.rate >= rating[0] && product.rating.rate <= rating[1]);
    return sortedByRating;
  };

  useEffect(() => {
    if (products.length) {
      const productsInCategory = getProducts();
      const rating = getRating(productsInCategory);
      productStore.setRating(rating);
      productStore.setCurrentRating(rating);

      const price = getPrice(productsInCategory);
      productStore.setPrice(price);
      productStore.setCurrentPrice(price);

      const product = sortProduct(productsInCategory, rating, price);
      setSortedProducts(product);
    }
  }, [products, categoryName]);

  useEffect(() => {
    if (currentRating.length && currentPrice.length) {
      const productsInCategory = getProducts();
      const product = sortProduct(productsInCategory, currentRating, currentPrice);
      setSortedProducts(product);
    }
  }, [currentPrice, currentRating]);

  useEffect(() => {
    if (sortedProducts.length) {
      setIsLoading(true);
      productStore.setLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [sortedProducts]);

  return { products: sortedProducts, isLoading };
};
