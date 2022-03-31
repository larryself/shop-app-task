import React, { FC } from 'react';
import CardItem from '../cardItem/cardItem';
import { Product } from '../../types';
import { List } from './style';

interface CardListProps {
  products: Product[],
}

const CardList: FC<CardListProps> = ({products = []}) => {
  return (
    <List>
      {products.map(product => (
        <li key={product.id}><CardItem product={product}/></li>
      ))}
    </List>
  );
};

export default CardList;
