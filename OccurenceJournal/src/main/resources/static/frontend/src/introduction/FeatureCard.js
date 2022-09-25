import React from 'react';

import defaultImage from '../images/red-diary-blue-bg.png';

const FeatureCard = ({ feature }) => {
    return (
        <div className='card p-5 shadow-lg m-3' style={{ height: '550px' }}>
            <img
                src={feature.image}
                alt='INTRODUCTION IMAGE'
                className='img-fluid card-img-top'
                style={{
                    height: '300px',
                }}
            />

            <div className='card-body'>
                <h5>{feature.title}</h5>
                <p className='text-muted'>{feature.description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
