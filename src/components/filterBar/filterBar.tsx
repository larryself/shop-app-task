import React from 'react';
import { useAction } from 'hooks/useAction';
import { useAppSelector } from 'hooks/useAppSelector';
import { RangeSlider } from 'components/rangeSlider/rangeSlider';
import { Section, Item, Title } from 'components/filterBar/style';

export const FilterBar = () => {
  const { price, rating, currentRating, currentPrice } = useAppSelector(state => state.product)
  const { setCurrentPrice,setCurrentRating } = useAction();
  return (
    <Section>
      <Item>
        <Title>Price Range</Title>
        <RangeSlider min={price[0]} max={price[1]} value={currentPrice} onFinalChange={setCurrentPrice}/>
      </Item>
      <Item>
        <Title>Rating range</Title>
        <RangeSlider min={rating[0]} max={rating[1]} value={currentRating} onFinalChange={setCurrentRating}/>
      </Item>
    </Section>
  );
};
