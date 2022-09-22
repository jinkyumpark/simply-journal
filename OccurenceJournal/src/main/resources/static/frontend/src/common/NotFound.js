import React from 'react';
import { VscError as ErrorIcon } from 'react-icons/vsc';

const NotFound = ({ message }) => {
    return (
        <div className='mt-5'>
            <ErrorIcon className='display-1 mb-3 text-danger' />

            <h1>{message}</h1>
        </div>
    );
};

export default NotFound;
