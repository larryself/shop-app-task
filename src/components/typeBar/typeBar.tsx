import React, {FC, useEffect, useState} from 'react';
import RangeSlider from "../rangeSlider/rangeSlider";
import {Section, Item, Title} from "./style";

const TypeBar: FC = () => {
    const [price, setPrice] = useState([]);
    const [rating, setRating] = useState([]);
    useEffect(()=>{
    },[price])
    return (
        <Section>
            <Item>
                <Title>Price Range</Title>
                <RangeSlider min={0} max={100} value={[10, 23]} setValue={setPrice}/>
            </Item>
            <Item>
                <Title>Rating range</Title>
                <RangeSlider min={0} max={5} value={[3, 4]} setValue={setRating}/>
            </Item>
        </Section>
    );
};

export default TypeBar;
