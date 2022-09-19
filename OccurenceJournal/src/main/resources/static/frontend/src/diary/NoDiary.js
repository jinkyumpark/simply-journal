import React from 'react';

import { VscError as ErrorIcon } from 'react-icons/vsc';

const NoDiary = () => {
    return (
        <div className='mt-5'>
            <ErrorIcon className='display-1 mb-3 text-danger' />

            <h1>이번달은 일기가 없어요 어서 추가해 보세요!</h1>
        </div>
    );
};

export default NoDiary;
