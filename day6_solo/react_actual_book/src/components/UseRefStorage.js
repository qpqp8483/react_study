import React, { useEffect, useRef, useState } from 'react';

const UseRefStorage = () => {

    const [age, setAge] = useState(20);
    const prevAgeRef = useRef(30);

    useEffect(
        () => {
            prevAgeRef.current = age;
        },[age]
    )
    const prevAge = prevAgeRef.current;
    const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';

    return (
        <div>
            <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
            <button
                onClick={() => {
                    const newAge = Math.floor(Math.random() * 50 + 1);
                    setAge(newAge);
                }}
            >
            나이변경
            </button>
        </div>
    );
};

export default UseRefStorage;