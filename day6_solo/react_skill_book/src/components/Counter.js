//import React, { useState } from 'react';
import { useReducer } from "react";

///////////////////////////////// useState를 사용한 Counter start /////////////////////////////////

// const Counter = () => {

//     const [value, setValue] = useState(0);

//     return (
//         <div className='counter_box'>
//             <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
//             <button onClick={() => {setValue(value + 1)}}> +1 </button>
//             <button onClick={() => {setValue(value - 1)}}> -1 </button>
//         </div>
//     );
// };

///////////////////////////////// useState를 사용한 Counter End /////////////////////////////////

///////////////////////////////// useReducer를 사용한 Counter start /////////////////////////////////
function reducer(state, action) {
        
    switch(action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }

}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div className='counter_box'>
            <p>현재 카운터 값은 <b>{state.value}</b>입니다.</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' }) }> +1 </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' }) }> -1 </button>
        </div>
    );
    
};

export default Counter;