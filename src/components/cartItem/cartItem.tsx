import React, { FC, useState } from 'react';
import { Product } from '../../types';
import CountSelector from '../countSelector/countSelector';
import { Container, Inner, ImgWrapper, Price, TotalInner } from './style';

const CartItem: FC<Product> = ({image, title, piece, price}) => {
  const [count, setCount] = useState(piece);
  return (
    <Container>
      <Inner>
        <ImgWrapper>
          <img src={image} width={72} height={64} alt={title}/>
        </ImgWrapper>
        <div>
          <p>{title}</p>
          <Price>{price.toFixed(2)}</Price>
        </div>
      </Inner>
      <div>
        <CountSelector count={count} setCount={setCount}/>
      </div>
      <TotalInner>
        <p>{(count * price).toFixed(2)}</p>
      </TotalInner>
    </Container>
  );
};

export default CartItem;
