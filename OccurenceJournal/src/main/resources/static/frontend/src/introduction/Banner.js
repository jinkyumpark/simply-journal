// React
import React from 'react';
// Resources
import diaryImage from '../images/red-diary-blue-bg.png';
// Bootstrap
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='row'>
            <div className='col-xl-8 col-lg-7 col-sm-12'>
                <div className='mb-3'>
                    <h1 className='display-6 mt-5'>지나간 순간을 기록하는,</h1>
                    <h1 className='display-6 mt-2'>가장 간편한 방법.</h1>
                </div>
                <p className='lead text-muted text-left'>
                    지나간 순간을 일기를 보며 추억하는건 놓칠 수 없지만,
                    <br />
                    매일 일기를 쓰기는 쉽지 않아요.
                    <br />
                    하지만 매일 가벼운 마음으로 한 줄만 쓰면 어떨까요?
                </p>
                <div className='row mt-5'>
                    <div className='col-12 col-lg-6'>
                        <Button
                            variant='danger'
                            href='/join'
                            className='col-12'
                        >
                            가입하기
                        </Button>
                    </div>
                    <div className='col-12 col-lg-6 mt-lg-0 mt-3'>
                        <Button
                            variant='success'
                            href='/login'
                            className='col-12'
                        >
                            로그인하기
                        </Button>
                    </div>
                </div>
            </div>

            <div className='col-xl-4 col-lg-5 col-sm-12'>
                <img
                    src={diaryImage}
                    alt='DIARY IMAGE'
                    className='img-fluid rounded-circle mt-5 p-3'
                />
            </div>
        </div>
    );
};

export default Banner;
