import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Product } from '../../types';
import { Wrapper } from '../wrapper/wrapper';
import { CartItem } from '../cartItem/cartItem';
import { Footer } from '../footer/footer';
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

export const CartPage: FC = () => {
  const cart = useAppSelector(state => state.cart)
  const sum = (products: Product[]) => {
    const price = products.map(product => product.price * product.piece);
    return price.reduce((acc, el) => acc + el, 0).toFixed(2)
  }
  return (
    <Wrapper>
      <Inner>
      <Main>
        <ContentInner>
          <CartContent>
            <Title>Your shopping cart</Title>
            <CartList>
              {cart.map((item) => (
                <li key={item.id}>{<CartItem {...item} />}
                </li>
              ))}
            </CartList>
          </CartContent>
          <Total>
            <Titles>Order summary</Titles>
            <List>
              <Row><RowTitle>Sub total</RowTitle><Price>{sum(cart)}</Price></Row>
              <Row><RowTitle>Delivery fee</RowTitle><Price>0</Price></Row>
            </List>
            <Line/>
            <SumRow><Price>{sum(cart)}</Price></SumRow>
            <Button type={'button'}>Proceed to checkout</Button>
          </Total>
        </ContentInner>
      </Main>
      <Footer/>
      </Inner>
    </Wrapper>
  );
};
