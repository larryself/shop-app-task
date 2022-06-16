import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useStore } from 'store/store';
import { Product } from 'types';
import { Wrapper, CartItem, Footer } from 'components';
import {
  Inner,
  Main,
  ContentInner,
  Title,
  CartList,
  CartContent,
  Price,
  Total,
  List,
  Row,
  RowTitle,
  SumRow,
  Titles,
  Line,
  Button
} from './style';

export const CartPage: FC = observer(() => {
  const { cartStore: { inCart } } = useStore();
  const sum = (products: Product[]) => {
    const price = products.map(product => product.price * product.piece);
    return price.reduce((acc, el) => acc + el, 0).toFixed(2);
  };
  return (
    <Wrapper>
      <Inner>
        <Main>
          <ContentInner>
            <CartContent>
              <Title>Your shopping cart</Title>
              <CartList>
                {inCart.map((item) => (
                  <li key={item.id}><CartItem {...item} />
                  </li>
                ))}
              </CartList>
            </CartContent>
            <Total>
              <Titles>Order summary</Titles>
              <List>
                <Row><RowTitle>Sub total</RowTitle><Price>{sum(inCart)}</Price></Row>
                <Row><RowTitle>Delivery fee</RowTitle><Price>0</Price></Row>
              </List>
              <Line/>
              <SumRow><Price>{sum(inCart)}</Price></SumRow>
              <Button type={'button'}>Proceed to checkout</Button>
            </Total>
          </ContentInner>
        </Main>
        <Footer/>
      </Inner>
    </Wrapper>
  );
});
