import React from 'react';

const Counter = ({number,increase,decrease}) => {
    return (
        <>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <span>{number}</span>
        </>
    );
};

export default Counter;