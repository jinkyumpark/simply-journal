import React from 'react';

const Loading = () => {
    return (
        <div className='row justify-content-center'>
            <div
                className='spinner-border text-primary'
                role='status'
                style={{
                    width: '5rem',
                    height: '5rem',
                }}
            >
                <div className='sr-only'></div>
            </div>

            <h1 className='mt-5 text-center'>일기를 가져오고 있어요</h1>
        </div>
    );
};

export default Loading;
