import React, { useRef } from 'react'

const ScrollBox = () => {
    const style = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative'
    };
    const innerStyle = {
        height: '650px',
        width: '100%',
        background:'linear-gradient(white, black)'
    }
    const boxRef = useRef(null);

    const scrollToBottom = () => {
        const { scrollHeight, clientHeight } = boxRef.current;
        boxRef.current.scrollTop = scrollHeight - clientHeight;
    }

    return (
        <>
            <div
                style={style}
                ref={boxRef}
            >
                <div style={innerStyle}></div>
            </div>
            <button onClick={scrollToBottom}>맨 밑으로</button>
        </>
        
    )
}

export default ScrollBox;