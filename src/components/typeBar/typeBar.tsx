import React, { FC, useState } from 'react';
import RangeSlider from '../rangeSlider/rangeSlider';
import { Section, Item, Title } from './style';

interface TypeBarProps {
  price: number[];
  rating: number[];


}

const TypeBar: FC<TypeBarProps> = ({price, rating}) => {
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
