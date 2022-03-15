import React, {FC} from 'react';
import CardItem from "../cardItem/cardItem";
import {Product} from "../../types";
import {List} from "./style";

const CardList: FC<{products?: Product[]}> = ({products}) => {
    return (
        <List>
            {products && products.map(product => (
                <li key={product.id}><CardItem product={product}/></li>
            ))}
        </List>
    );
};

export default CardList;
