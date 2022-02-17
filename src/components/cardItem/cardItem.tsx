import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.h3`
  margin-top: 24px;
`
const Price = styled.p`
  color: rgba(0, 0, 0, 0.65);
  margin-top: 8px;
  margin-bottom: 24px;`
const CardItem = ({product}) => {
    return (
        <Container>
            <div>
                <img src={product.image} alt={'image'} width={310}
                     height={308}/>
            </div>
            <Name>{product.title}</Name>
            <Price>{product.price}</Price>
        </Container>
    );
};

export default CardItem;