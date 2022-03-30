import React, {FC} from 'react';
import RangeSlider from "../rangeSlider/rangeSlider";
import {Section, Item, Title} from "./style";
import {useAppSelector} from "../../hooks/useAppSelector";

const TypeBar: FC = () => {
    const {rating, price} = useAppSelector(state=>state.product)
    return (
        <Section>
            <Item>
                <Title>Price Range</Title>
                <RangeSlider min={price[0]} max={price[1]} value={price}/>
            </Item>
            <Item>
                <Title>Rating range</Title>
                <RangeSlider min={rating[0]} max={rating[1]} value={rating}/>
            </Item>
        </Section>
    );
};

export default TypeBar;
