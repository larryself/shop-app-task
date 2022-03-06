import React, {useState, FC, useEffect} from 'react';
import Minus from "../../assets/img/minus.svg";
import Plus from "../../assets/img/plus.svg";
import styled from "styled-components";
import {useAction} from "../../hooks/useAction";
import {Product} from "../../types";
import {useAppSelector} from "../../hooks/useAppSelector";

const Input = styled.input`
  text-align: center;
  width: 48px;
  height: 48px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 16px;
  line-height: 24px;`
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;`
const Button = styled.button`
  display: flex;

  &:disabled {
    opacity: 0.3;
  }`
const CountSelector = ({value, id}:{value?: number, id: number}) => {
    const [count, setCount] = useState(value || 1);
    const {handleCount}= useAction();
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const handleInput = (event: any) => {
        const {target: {value}} = event;
        setCount(+value);
    };
    useEffect(()=>{
        handleCount({count,id})
    },[count])
    return (
        <>
            <Container>
                <Button type="button" onClick={decrement} disabled={count > 1 ? false : true}><Minus/></Button>
                <Input type="text" value={count} onChange={handleInput}/>
                <Button type="button" onClick={increment}><Plus/></Button>
            </Container>
        </>
    );
};

export default CountSelector;