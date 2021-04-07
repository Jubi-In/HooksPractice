import React, { useState } from 'react';

const useEffect = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    이름: {name}
                </div>
                <div>
                    닉네임: {nickname}
                </div>
            </div>
        </div>
    );
};

export default useEffect;