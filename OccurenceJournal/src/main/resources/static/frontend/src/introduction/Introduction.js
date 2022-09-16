import React from 'react';
import { Button } from 'react-bootstrap';

import diaryImage from '../images/red-diary-blue-bg.png';
import FeatureCard from './FeatureCard';

const Introduction = () => {
    const features = [
        {
            id: 1,
            title: '가벼운 마음으로 매일 한 번',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nibh ullamcorper, posuere sapien imperdiet, congue ex. ',
            image: 'https://picsum.photos/100/100',
        },
        {
            id: 2,
            title: '잊을만할때 상기시키는 추억',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nibh ullamcorper, posuere sapien imperdiet, congue ex. ',
            image: 'https://picsum.photos/100/100',
        },
        {
            id: 3,
            title: 'TEST 1',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nibh ullamcorper, posuere sapien imperdiet, congue ex. ',
            image: 'https://picsum.photos/100/100',
        },
    ];

    return (
        <div className='row mt-5'>
            <div className='row align-items-center'>
                <div className='col-xl-7 col-lg-6 col-sm-12'>
                    <div className='row'>
                        <div className='mb-3'>
                            <h1 className='display-6 mt-5'>
                                지나간 순간을 기록하는,
                            </h1>
                            <h1 className='display-6 mt-2'>
                                가장 간편한 방법.
                            </h1>
                        </div>
                        <p className='lead text-muted text-left'>
                            지나간 순간을 일기를 보며 추억하는건 놓칠 수 없지만,
                            <br />
                            매일 일기를 쓰기는 쉽지 않아요.
                            <br />
                            하지만 매일 가벼운 마음으로 한 줄만 쓰면 어떨까요?
                        </p>
                        <div className='col-sm-12 col-lg-6 col-xl-12 mt-5'>
                            <Button variant='success' href='/join'>
                                지금 시작하기
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='col-xl-3 col-lg-6 col-sm-12'>
                    <img
                        src={diaryImage}
                        alt='DIARY IMAGE'
                        className='img-fluid rounded-circle p-sm-5 p-3'
                    />
                </div>
                <div className='row mt-5'>
                    <h3 className='mb-4'>
                        인생의 기록을 남기는 장소, Simply Journal
                    </h3>

                    <div className='row'>
                        {features.map((feature) => {
                            return (
                                <div className='col-sm-12 col-lg-4'>
                                    <FeatureCard feature={feature} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
