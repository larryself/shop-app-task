import React, { FC } from 'react';
import { ProductItem } from '../productItem/productItem';
import { Product } from '../../types';
import { List } from './style';

interface CardListProps {
  products: Product[],
}

export const ProductList: FC<CardListProps> = ({products}) => {
  return (
    <List>
      {products.map(product => (
        <li key={product.id}><ProductItem product={product}/></li>
      ))}
    </List>
  );
}
