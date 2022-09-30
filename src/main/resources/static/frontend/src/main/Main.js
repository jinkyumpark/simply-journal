import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    let navigation = useNavigate();

    useEffect(() => {
        navigation('/introduction');
    }, []);

    return (
        <div className='container mt-5'>
            <h1>Main Page</h1>
        </div>
    );
};

export default Main;
