import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiaryBox from './Diary';
import DiaryDateSelectView from './DiaryDateSelectView';
import NoDiary from './NoDiary';

const LoadingView = () => {
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

            <h1 className='mt-5'>일기를 가져오고 있어요</h1>
        </div>
    );
};

const DiaryListView = () => {
    const [diaries, setDiaries] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost/api/v1/diary/all?id=jinkyumpark')
            .then((res) => {
                return res.json();
            })
            .then((diaries) => {
                setDiaries(diaries);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='row flex justify-content-center m-0 p-0'>
            <DiaryDateSelectView />

            {isLoading ? (
                <LoadingView />
            ) : !diaries ? (
                <NoDiary />
            ) : (
                diaries.map((diary) => {
                    return (
                        <Link
                            to={`/diary/${diary.id}`}
                            className='text-decoration-none text-black'
                        >
                            <DiaryBox diary={diary} />
                        </Link>
                    );
                })
            )}
        </div>
    );
};

export default DiaryListView;
