import React, { useCallback, useRef, useState } from 'react';

const ForwardRef = () => {

    const inputRef = useRef();
    const [text, setText] = useState('');
    const [showText, setShowText] = useState(true);

    const setInitialText = useCallback( ref => ref && setText(''),[])

    return (
        <div>
            <TextInput ref={inputRef}/>
            <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
            <div>
                {showText && (
                    <input 
                        type='text'
                        ref={setInitialText}
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                )}
                <button
                    onClick={() => setShowText(!showText)}
                >보이기 / 가리기</button>
            </div>
        </div>
    );
};


const TextInput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input type='text' ref={ref}/>
            <button>저장</button>
        </div>
    )
});

export default ForwardRef;