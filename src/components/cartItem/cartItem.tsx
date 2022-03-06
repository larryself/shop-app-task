import React, {FC} from 'react';
import styled from "styled-components";
import {Product} from "../../types";
import CountSelector from "../countSelector/countSelector";
import {useGetProductsQuery} from "../../store/product/product";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.04);
  display: flex;
  padding: 24px 32px;
  align-items: center;
  gap: 24px;`
const ImgWrapper = styled.div`
  padding: 8px 12px;
  background: #FFFFFF;
  border-radius: 8px;`
const CartItem: FC<{product: Product, value: number}> = ({product,value}) => {
    return (
        <Container>
            <div>
                <ImgWrapper>
                    <img src={product.image} width={72} height={64} alt=""/>
                </ImgWrapper>
            </div>
            <p>{product.title}</p>
            <div>
                <CountSelector id={product.id} value={value}/>
            </div>
            <p>{product.price}</p>
        </Container>
    );
};

export default CartItem;