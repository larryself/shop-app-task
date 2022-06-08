import React,{ FC } from 'react';
import { useStore } from 'store/store';
import { Product } from 'types';
import { Container, Img, ImgContainer, Inner, Name, Price } from 'components/productItem/style';

interface ProductItemProps {
  product: Product,
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const convertPrice = (value: number) => value.toFixed(3);
  const { productStore } = useStore();
  return (
    <Inner>
      <Container>
        <ImgContainer onClick={() => {
          productStore.openCart(product);
        }} tabIndex={0}>
          <Img src={product.image} alt={product.title} width={310}
               height={308}/>
        </ImgContainer>
        <Name title={product.title}>{product.title}</Name>
      </Container>
      <Price>{convertPrice(product.price)}RWF</Price>
    </Inner>
  );
};
