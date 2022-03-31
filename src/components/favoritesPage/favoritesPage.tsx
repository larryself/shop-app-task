import React, { FC } from 'react';
import CardList from '../cardList/cardList';
import { useAppSelector } from '../../hooks/useAppSelector';

const FavoritesPage: FC = () => {
  const favorites = useAppSelector(state => state.favorites)
  console.log(Boolean(favorites))
  return (
    <>
      <h2>Your favorites</h2>
      {favorites.length ? 'not favorite' : <CardList products={favorites}/>}
    </>
  );
};

export default FavoritesPage;
