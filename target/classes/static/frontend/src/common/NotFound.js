import React from 'react';
import { VscError as ErrorIcon } from 'react-icons/vsc';

const NotFound = ({ message }) => {
    return (
        <div className='mt-5'>
            <div className='row'>
                <ErrorIcon className='display-1 mb-3 text-danger' />
            </div>

            <h1 className='text-center'>{message}</h1>
        </div>
    );
};

export default NotFound;
