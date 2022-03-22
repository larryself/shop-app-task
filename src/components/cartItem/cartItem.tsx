import React, {FC, useState} from 'react';
import {Product} from "../../types";
import CountSelector from "../countSelector/countSelector";
import {Container, ImgWrapper} from './style';

const CartItem: FC<Product> = ({image,title,piece,price}) => {
    const [count, setCount] = useState(piece);
    return (
        <Container>
            <div>
                <ImgWrapper>
                    <img src={image} width={72} height={64} alt={title}/>
                </ImgWrapper>
            </div>
            <p>{title}</p>
            <div>
                <CountSelector count={count} setCount={setCount}/>
            </div>
            <p>{price}</p>
        </Container>
    );
};

export default CartItem;
