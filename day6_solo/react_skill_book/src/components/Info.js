import React, { useEffect, useState } from 'react';

const Info = () => {

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() =>{
        console.log('렌더링이 완료되었습니다.');
        console.log(name,nickname);
        return () => {
            console.log('cleanUp');
            console.log(name, nickname);
        }
    },[name, nickname]); //의존성 배열이 비어있는경우 최초 렌더링될때만 실행 업데이트 될때는 실행X

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div className='info_box'>
            <div>
                <input vlaue={name} onChange={onChangeName} />
                <input vlaue={nickname} onChange={onChangeNickname} />
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



export default Info;