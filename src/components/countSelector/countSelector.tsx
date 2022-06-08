import React, { ChangeEvent, FC } from 'react';
import { Minus } from 'components/icon/minus/minus';
import { Plus } from 'components/icon/plus/plus';
import { Container, Input, Button } from 'components/countSelector/style';

interface CountSelectorProps {
  count: number,
  setCount: (count: number) => void,
}

export const CountSelector: FC<CountSelectorProps> = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    const currentValue = +value.replace(/\D/gi, '') || 1;
    setCount(currentValue);
  };
  return (
    <Container>
      <Button type={'button'} onClick={decrement} disabled={!(count > 1)}><Minus/></Button>
      <Input type={'text'} value={count} onChange={handleInput}/>
      <Button type={'button'} onClick={increment}><Plus/></Button>
    </Container>
  );
};
