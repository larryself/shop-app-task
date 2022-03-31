import { FC } from 'react';
import { Product } from '../../types';
import { useAction } from '../../hooks/useAction';
import { Inner, Container, ImgContainer, Img, Name, Price } from './style';

const CardItem: FC<{ product: Product }> = ({product}) => {
  const convertPrice = (value: number) => {
    return value.toFixed(3);
  }
  const {openCart} = useAction();
  return (
    <Inner>
    <Container>
      <ImgContainer onClick={() => {
        openCart(product);
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

export default CardItem;
