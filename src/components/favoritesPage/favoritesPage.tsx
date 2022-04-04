import React, { FC } from 'react';
import { ProductList } from '../productList/productList';
import { useAppSelector } from '../../hooks/useAppSelector';

const FavoritesPage: FC = () => {
  const favorites = useAppSelector(state => state.favorites)
  return (
    <>
      <h2>Your favorites</h2>
      {favorites.length ? 'not favorite' : <ProductList products={favorites}/>}
    </>
  );
};

export default FavoritesPage;
