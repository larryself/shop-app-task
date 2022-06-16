import React from 'react';
import { RangeSlider } from 'components';
import { Section, Item, Title } from 'components/filterBar/style';
import { useStore } from 'store/store';

export const FilterBar = () => {
  const { productStore: { price, rating } } = useStore();
  const { productStore } = useStore();
  const handlePrice = (value: number[]) => {
    productStore.setCurrentPrice(value);
  };
  const handleRating = (value: number[]) => {
    productStore.setCurrentRating(value);
  };
  return (
    <Section>
      <Item>
        <Title>Price Range</Title>
        <RangeSlider min={price[0]} max={price[1]} value={productStore.getCurrentPrice} onFinalChange={handlePrice}/>
      </Item>
      <Item>
        <Title>Rating range</Title>
        <RangeSlider min={rating[0]} max={rating[1]} value={productStore.getCurrentRating}
                     onFinalChange={handleRating}/>
      </Item>
    </Section>
  );
};
