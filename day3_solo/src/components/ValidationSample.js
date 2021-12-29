import React, { useRef, useState } from 'react';
import '../common/ValidationSample.css';

const ValidationSample = () => {

    const [password,setPassword] = useState('');
    const [clicked,setClicked] = useState(false);
    const [validated,setValidated] = useState(false);
    const inputRef = useRef();

    const handleChange = e => {
        setPassword(e.target.value); 
    }

    const handleButtonClick = () => {
        setClicked(true);
        setValidated(password === '0000');
        inputRef.current.focus();
    }
    const handleReset = () => {
        setPassword('');
        setClicked(false);
        inputRef.current.focus();
    }

    return (
        <div>
            <input 
                type="password"
                value={password}
                onChange={handleChange}
                className={clicked ? (validated ? 'success' : 'failure') : ''}
                ref={inputRef}
            />
            <button onClick={handleButtonClick}>검증하기</button>
            <button onClick={handleReset}>지우기</button>
        </div>
    )
}

export default ValidationSample;
