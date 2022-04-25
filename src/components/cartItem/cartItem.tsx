import React, { FC, useEffect, useState } from 'react';
import { useAction } from 'hooks/useAction';
import { Product } from 'types';
import { CountSelector } from 'components/countSelector/countSelector';
import { Container, Inner, ImgWrapper, Img, Price, TotalInner } from 'components/cartItem/style';

export const CartItem: FC<Product> = ({id ,image, title, piece, price}) => {
  const {setPiece} = useAction();
  const [count, setCount] = useState(piece);
  useEffect(()=>{
      setPiece({id, count})
    }
    ,[count])
  return (
    <Container>
      <Inner>
        <ImgWrapper>
          <Img src={image} width={72} height={64} alt={title}/>
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
