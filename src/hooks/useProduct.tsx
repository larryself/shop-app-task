import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useAppSelector } from './useAppSelector';

export const UseProduct = (categoryName) => {
  const {products} = useAppSelector(state => state.product)
  const [price, setPrice ] = useState<number[]>([]);
  const [rating, setRating ] = useState<number[]>([]);

  const getPrice = ( categoryName: string | string[] | undefined) =>{
    const currentProduct =  categoryName ? products.filter(product=> product.category === categoryName) : products
    const price = currentProduct.map(product => product.price)
    const minPrice = Math.min(...price);
    const maxPrice = Math.max(...price);
    setPrice([minPrice, maxPrice]);
  }

  const getRating = ( categoryName: string | string[] | undefined) =>{
    const currentProduct =  categoryName ? products.filter(product=> product.category === categoryName) : products
    const rating = currentProduct.map(product=> product.rating.rate)
    const minRating = Math.min(...rating);
    const maxRating = Math.max(...rating);
    setRating([minRating,maxRating])
  }

  useEffect(()=>{
    console.log(categoryName)
    if(products.length) {
      getPrice()
      getRating()
    }

  },[products])



  return [price, rating, ]
}

