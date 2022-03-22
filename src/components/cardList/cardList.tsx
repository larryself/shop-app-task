import React, {FC, useEffect, useState} from 'react';
import CardItem from "../cardItem/cardItem";
import {Product} from "../../types";
import {List} from "./style";

const CardList: FC<{products: Product[],category?: string}> = ({products=[], category= ''}) => {
    const [carts, setCarts] = useState<Product[]>(products);
    useEffect(()=>{
        if(category){
            const sortedProducts = products.filter((product)=> product.category === category)
            setCarts(sortedProducts);
        }
    },[category])
    return (
        <List>
            {carts.map(product => (
                <li key={product.id}><CardItem product={product}/></li>
            ))}
        </List>
    );
};

export default CardList;
