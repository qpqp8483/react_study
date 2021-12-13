import React, { useState } from 'react';
import Counter from './Counter';

const PageCounter = () => {
    const [number, setNumber] = useState(0);
    
    const increase = () => {
        setNumber(number+1);
    }
    const decrease = () => {
        if(number > 0){
            setNumber(number-1);
        }else{
            alert('0보다 작은순 없어!');
        }
    }
    return (
        <>
            <Counter number={number} increase={increase} decrease={decrease}></Counter>
        </>
    );
};

export default PageCounter;