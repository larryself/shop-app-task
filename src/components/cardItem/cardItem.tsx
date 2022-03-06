import {FC} from 'react';
import styled from "styled-components";
import {Product} from "../../types";
import {useAction} from "../../hooks/useAction";


const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ImgContainer = styled.div`
  cursor: pointer;`
const Name = styled.h3`
  margin-top: 24px;
`
const Price = styled.p`
  color: rgba(0, 0, 0, 0.65);
  margin-top: 8px;
  margin-bottom: 24px;`
const CardItem: FC<{ product: Product }> = ({product}) => {
    const {openCart} = useAction();
    return (
        <Container>
            <ImgContainer onClick={() => {
                openCart(product);
            }} tabIndex={0}>
                <img src={product.image} alt={'image'} width={310}
                     height={308}/>
            </ImgContainer>
            <Name>{product.title}</Name>
            <Price>{product.price}</Price>
        </Container>
    );
};

export default CardItem;