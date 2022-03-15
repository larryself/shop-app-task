import {FC} from 'react';
import {Product} from "../../types";
import {useAction} from "../../hooks/useAction";
import {Container, ImgContainer, Img,Name, Price} from './style';

const CardItem: FC<{ product: Product }> = ({product}) => {
    const convertPrice = (value: number) => {
        return value.toFixed(3);
    }
    const {openCart} = useAction();
    return (
        <Container>
            <ImgContainer onClick={() => {
                openCart(product);
            }} tabIndex={0}>
                <Img src={product.image} alt={product.title} width={310}
                     height={308}/>
            </ImgContainer>
            <Name>{product.title}</Name>
            <Price>{convertPrice(product.price)}RWF</Price>
        </Container>
    );
};

export default CardItem;
