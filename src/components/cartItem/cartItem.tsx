import React, {FC} from 'react';
import {Product} from "../../types";
import CountSelector from "../countSelector/countSelector";
import {Container, ImgWrapper} from './style';

const CartItem: FC<{product: Product, value: number}> = ({product,value}) => {
    return (
        <Container>
            <div>
                <ImgWrapper>
                    <img src={product.image} width={72} height={64} alt={product.title}/>
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
