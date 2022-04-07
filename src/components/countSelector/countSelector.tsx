import React, { ChangeEvent, FC } from 'react';
import { Minus } from '../icon/minus/minus';
import { Plus } from '../icon/plus/plus';
import { Container, Input, Button } from './style';

interface CountSelectorProps {
  count: number,
  setCount: (value: number) => void,
}

export const CountSelector: FC<CountSelectorProps> = ({count, setCount}) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {target: {value}} = event;
    setCount(+value);
  };
  return (
    <>
      <Container>
        <Button type="button" onClick={decrement} disabled={count > 0 ? false : true}><Minus/></Button>
        <Input type="text" value={count} onChange={handleInput}/>
        <Button type="button" onClick={increment}><Plus/></Button>
      </Container>
    </>
  );
};
