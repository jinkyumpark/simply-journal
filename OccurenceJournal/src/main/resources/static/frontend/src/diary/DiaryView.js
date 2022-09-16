import React from 'react';
import DiaryBox from './DiaryBox';

const DiaryView = () => {
    let diaries = [
        {
            id: 1,
            postDate: '2022-09-01T17:45',
            content: 'TEST 1',
            emotion: 'VERYHAPPY',
        },
        {
            id: 2,
            postDate: '2022-09-02T17:45',
            content: 'TEST 2',
            emotion: 'SAD',
        },
        {
            id: 3,
            postDate: '2022-09-03T17:45',
            content: 'TEST 3',
            emotion: 'ANGRY',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content: 'TEST 4',
            emotion: 'NEUTRAL',
        },
    ];

    return (
        <div className='row justify-content-center m-0 p-0'>
            {diaries.map((diary) => {
                return <DiaryBox diary={diary} />;
            })}
        </div>
    );
};

export default DiaryView;
