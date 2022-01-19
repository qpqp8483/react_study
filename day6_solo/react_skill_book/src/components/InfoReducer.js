import React, { useReducer } from 'react';
import useInputs from './useInputs';

// function reducer(state, action) {
//     console.log(state, [action.name]);
//     return {
//         ...state,
//         [action.name]: action.value // ??
//     };    
// }

const InfoReducer = () => {

    // const [state, dispatch] = useReducer(reducer, {
    //     name : '',
    //     nickname : ''
    // });

    // const { name, nickname } = state;
    // const onChange = e => {
    //     dispatch(e.target);
    //     console.log(e.target);
    // }

    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    });

    const { name, nickname } = state;

    

    return (
        <div className='info_box'>
            <div>
                <input name='name' vlaue={name} onChange={onChange} />
                <input name='nickname' vlaue={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    );
};



export default InfoReducer;