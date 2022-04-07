import { useAction } from 'hooks/useAction';
import React, { FC, useEffect, useState } from 'react';
import { Product } from 'types';
import { CountSelector } from 'components/countSelector/countSelector';
import { Favorites } from 'components/icon/favorites/favorites';
import {
  BtnInner,
  Button,
  Container,
  Content,
  ContentInner,
  FavoriteBtn,
  Header,
  Img,
  ImgInner,
  Inner,
  ModalBox,
  Price,
  Title,
  TitleInner
} from 'components/modal/style';

export const Modal: FC<{ product: Product }> = ({product}) => {
  const {closeCart, addItem} = useAction();
  const {handleFavorite} = useAction();
  const [count, setCount] = useState(1);
  const closeModal = () => {
    closeCart();
    const body = document.querySelector('body')
    if (body !== null) {
      body.classList.remove('no-scroll');
    }
  };
  const outsideClickHandler = (evt: any) => {
    if (!evt.target.classList.contains('modal')) return;
    closeModal();
  };
  const escHandler = (evt: KeyboardEvent) => {
    if (evt.key !== 'Escape') return;
    closeModal();
  };

  useEffect(() => {
    const body = document.querySelector('body')
    if (body !== null) {
      body.classList.add('no-scroll');
      document.addEventListener('click', outsideClickHandler);
      document.addEventListener('keydown', escHandler);
    }
    return () => {
      document.removeEventListener('click', outsideClickHandler);
      document.removeEventListener('keydown', escHandler);
    };
  }, []);

  return (
    <ModalBox className={'modal'}>
      <Inner>
        <Container>
          <Header>
            <TitleInner>
              <Title>{product.title}</Title>
              <FavoriteBtn onClick={() => handleFavorite(product)}><Favorites/></FavoriteBtn>
            </TitleInner>
            <Price>{product.price}</Price>
          </Header>
          <ImgInner>
            <Img src={product.image} alt={product.title}/>
          </ImgInner>
        </Container>
        <ContentInner>
          <Content>
            <h3>Description</h3>
            <p>{product.description}</p>
          </Content>
          <BtnInner>
            <CountSelector count={count} setCount={setCount}/>
            <Button type="button" onClick={() => {
              addItem({...product, piece: count}), closeModal()
            }}>Add to cart</Button>
          </BtnInner>
        </ContentInner>
      </Inner>
    </ModalBox>
  );
};
