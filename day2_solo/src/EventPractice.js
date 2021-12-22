import React,{ useState } from 'react'

const EventPractice = () => {

    const [form, setForm] = useState({
        username : '',
        message : ''
    });
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, 
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }
    const onClick = () => {
        alert(message + " : " + username);
        setForm({
            username : '',
            message : ''
        })
    }
    const onKeyPress = e => {
        if(e.key === "Enter"){
            onClick();
        }
    }
   
    return (
        <div>
            <h1>이벤트연습1</h1>
            <input 
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요."
                value={message}
                onChange={onChange}
            />
            <input 
                type="text"
                name="username"
                placeholder="아무거나 입력해 보세요."
                value={username}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPractice;
