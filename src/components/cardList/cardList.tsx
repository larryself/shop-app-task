import React from 'react';
import CardItem from "../cardItem/cardItem";
import styled from "styled-components";
import {useGetProductsQuery} from "../../store/product/product";
import {Product} from "../../types";

const List = styled.ul`
  max-width: 978px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 64px;
  margin-top: 24px;
`
const CardList = ({products}: {products?: Product[]}) => {
    return (
        <List>
            {products && products.map(product => (
                <li key={product.id}><CardItem product={product}/></li>
            ))}
        </List>
    );
};

export default CardList;