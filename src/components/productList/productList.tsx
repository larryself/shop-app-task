import React, { FC } from 'react';
import { Loader } from 'components/loader/loader';
import { useProductSelector } from 'hooks/useProductSelector';
import { ProductItem } from 'components/productItem/productItem';
import { Product } from 'types';
import { Container, List } from 'components/productList/style';

interface CardListProps {
  products: Product[],
}

export const ProductList: FC<CardListProps> = ({products}) => {
  const {loading} = useProductSelector();
  return (
    <Container>
      <List>
        {products.map(product => (
          <li key={product.id}><ProductItem product={product}/></li>
        ))}
      </List>
      {loading && <Loader top={'50px'}/>}
    </Container>
  );
}
