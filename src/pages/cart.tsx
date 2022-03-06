import React from 'react';
import {Wrapper} from "../components/wrapper/wrapper";
import {NextPage} from "next";
import {useAppSelector} from "../hooks/useAppSelector";
import CartItem from "../components/cartItem/cartItem";
import PageHeader from "../components/header/header";
import Footer from "../components/footer/footer";
import styled from "styled-components";
import {Product} from "../types";
import {useAction} from "../hooks/useAction";
import {useStore} from "react-redux";
import {CartState} from "../store/cartSlice/cartSlice";
import {useGetProductsQuery} from "../store/product/product";

const ContentInner = styled.div`
  display: flex;
  width: 100%;`
const Total = styled.div`
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.2rem;
`
const CartContent = styled.div`
  width: 100%;`
const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;`
const Button = styled.button`
  background-color: #D90429;
  padding: 10px 28px;
  color: #fff;
  margin-left: 7px;
  margin-top:64px;`
const Titles = styled.h4`
  padding-left: 7px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.75);`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Row = styled.li`
  padding-left: 7px;
  display: flex;
  justify-content: space-between;`

const RowTitle= styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);`
const SumRow = styled.div`
  display: flex;
  justify-content: flex-end;`
const Price = styled.p`
  font-size: 16px;
  line-height: 24px;`
const Line = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 22px;
  margin-bottom: 24px;
`
const CartPage: NextPage = () => {
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
            <PageHeader/>
            <main>
                <Wrapper>
                    <ContentInner>
                        <CartContent>
                            <Title>Your shopping cart</Title>
                            <CartList>
                                {cart.map(product => (
                                    <li key={product.id}>{<CartItem product={product.product} value={product.count}/>}
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