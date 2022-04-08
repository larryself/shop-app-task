import { useEffect, useState } from 'react';
import { Product } from '../types';
import { useAction } from './useAction';
import { useProductSelector } from 'hooks/useProductSelector';

export const useProducts = (categoryName: string | string[] | undefined) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {products, currentPrice, currentRating} = useProductSelector();
  const {setPrice, setRating, setCurrentRating, setCurrentPrice, setLoading} = useAction();

  const getPrice = (products: Product[]) =>{
    const price = products.map(product => product.price)
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    return [minPrice, maxPrice];
  }

  const getRating = (products: Product[]) =>{
    const rating = products.map(product=> product.rating.rate)
    const minRating = Math.min(...rating);
    const maxRating = Math.max(...rating);
    return [minRating,maxRating]
  }

  const getProducts = () => {
    return categoryName ? products.filter(product => product.category === categoryName) : products;
  }

  const sortProduct = (products: Product[], rating: number[],price: number[]) => {
    const sortedByPrice = products.filter(product => product.price >= price[0] && product.price <= price[1]);
    const sortedByRating = sortedByPrice.filter(product => product.rating.rate >= rating[0] && product.rating.rate <= rating[1])
    return sortedByRating
  }

  useEffect(()=>{
    if(products.length) {
      const productsInCategory = getProducts()
      const rating = getRating(productsInCategory);
      setRating(rating)
      setCurrentRating(rating)

      const price = getPrice(productsInCategory);
      setPrice(price)
      setCurrentPrice(price)

      const product = sortProduct(productsInCategory,rating,price)
      setSortedProducts(product)
    }
  },[products,categoryName])

  useEffect(()=>{
      if(currentRating.length && currentPrice.length) {
        const productsInCategory = getProducts()
        const product = sortProduct(productsInCategory,currentRating,currentPrice)
        setSortedProducts(product)
      }
  },[currentPrice,currentRating])

  useEffect(()=>{
    if(sortedProducts.length) {
      setIsLoading(true)
      setLoading(false)
    } else {
      setIsLoading(false)
    }
  },[sortedProducts])

  return {products: sortedProducts,isLoading}
}
