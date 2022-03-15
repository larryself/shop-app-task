import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {useGetProductsQuery} from "../../store/product/product";
import {Product} from "../../types";
import PageHeader from "../header/header";
import {Wrapper} from "../wrapper/wrapper";
import CartItem from "../cartItem/cartItem";
import Footer from "../footer/footer";
import {ContentInner, Title, CartList, CartContent, Price, Total, List, Row, RowTitle,SumRow, Titles, Line, Button} from './style';

const CartPage: FC = () => {
    const {cart} = useAppSelector(state => state.cart)
    const {data} = useGetProductsQuery();
    const formatedCartItem = (cart: any[])=> {
        const id = cart.map(item=> item.product.id);
        const unique = Array.from(new Set(id));
        return unique.map(element=>{
            if(unique.includes(element.product.id)){

            }
        })

    }
    console.log(formatedCartItem(cart))
    const sum = (products: {product:Product,count:number}[]) => {
        const price = products.map(product => product.product.price * product.count);
        return price.reduce((acc, el) => acc + el, 0)
    }
    return (
        <>
            <main>
                <Wrapper>
                    <ContentInner>
                        <CartContent>
                            <Title>Your shopping cart</Title>
                            <CartList>
                                {cart.map(product => (
                                    <li key={product.product?.id}>{<CartItem product={product.product} value={product.count}/>}
                                    </li>
                                ))}
                            </CartList>
                        </CartContent>
                        <Total>
                            <Titles>Order summary</Titles>
                            <List>
                                <Row><RowTitle>Sub total</RowTitle><Price>{sum(cart)}</Price></Row>
                                <Row><RowTitle>Delivery fee</RowTitle><Price>0</Price></Row>
                            </List>
                            <Line/>
                            <SumRow><Price>{sum(cart)}</Price></SumRow>
                            <Button type={'button'}>Proceed to checkout</Button>
                        </Total>
                    </ContentInner>
                </Wrapper>
            </main>
            <Footer/>
        </>
    );
};

export default CartPage;
