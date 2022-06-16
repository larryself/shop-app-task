import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Loader, ProductItem } from 'components';
import { useStore } from 'store/store';
import { Product } from 'types';
import { Container, List } from 'components/productList/style';

interface CardListProps {
  products: Product[],
}

export const ProductList: FC<CardListProps> = observer(({ products }) => {
  const { productStore: { isFiltering } } = useStore();
  return (
    <Container>
      <List>
        {products.map(product => (
          <li key={product.id}><ProductItem product={product}/></li>
        ))}
      </List>
      {isFiltering && <Loader top={'50px'}/>}
    </Container>
  );
});
