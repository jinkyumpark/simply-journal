// React
import React from 'react';
// Components
import Banner from './Banner';
import FeatureCard from './FeatureCard';

const Introduction = () => {
    const features = [
        {
            id: 1,
            title: '가벼운 마음으로 매일 한 번',
            description:
                '매일 한 줄, 가벼운 마음으로 일기를 쓸 수 있어요. 물론 원하시면 더 쓰셔도 돼요',
            image: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/laptop-820274_960_720.jpg',
        },
        {
            id: 2,
            title: '잊을만할때 상기시키는 추억',
            description:
                '1년 전 오늘, 1달 전, 며칠전 오늘은 어떤 일이 있었을까? 매일 추억을 상기시켜 드려요',
            image: 'https://cdn.pixabay.com/photo/2014/02/02/17/40/photos-256887_960_720.jpg',
        },
        {
            id: 3,
            title: '그게 언제였더라? 검색으로 바로',
            description:
                '그 음식 진짜 맛있었는데! 언제 먹었었지? 그 재밌던 일 언제였지? 일기 내용을 간편하게 검색 하실 수 있어요',
            image: 'https://cdn.pixabay.com/photo/2017/11/15/11/09/search-2951638_960_720.jpg',
        },
    ];

    return (
        <div className='container mt-5'>
            <Banner />

            <div className='row mt-5'>
                <h3 className='mb-4'>
                    인생의 기록을 남기는 장소, Simply Journal
                </h3>
            </div>

            <div className='row align-items-center mb-5'>
                {features.map((feature) => {
                    return (
                        <div className='col-sm-12 col-lg-4'>
                            <FeatureCard feature={feature} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Introduction;
