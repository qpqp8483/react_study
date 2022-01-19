import React, { useState } from 'react';
import InfoReducer from './InfoReducer';

const InfoControl = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => {setVisible(!visible)}}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            { visible && <InfoReducer /> }
        </div>
    );
};

export default InfoControl;