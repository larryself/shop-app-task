import React, {FC} from 'react';
import Minus from "../../assets/img/minus.svg";
import Plus from "../../assets/img/plus.svg";
import {Container, Input, Button} from './style';

const CountSelector: FC<{count: number, setCount: (count:any)=>void}> = ({count, setCount}) => {
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
