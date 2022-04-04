import React from 'react';
import { NextPage } from 'next';
import FavoritesPage from '../components/favoritesPage/favoritesPage';
import Layout from '../components/layout/layout';

const Favorites: NextPage = () => {
  return (
    <Layout>
      <FavoritesPage/>
    </Layout>
  );
};

export default Favorites;
