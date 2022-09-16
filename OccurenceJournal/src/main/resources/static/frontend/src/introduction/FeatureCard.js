import React from 'react';

const FeatureCard = ({ feature }) => {
    return (
        <div className='card p-5 shadow-lg'>
            <img
                src={feature.image}
                alt='INTRODUCTION IMAGE'
                className='card-img-top rounded-circle'
            />
            <div className='card-body'>
                <h5>{feature.title}</h5>
                <p className='text-muted'>{feature.description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
