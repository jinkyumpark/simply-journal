import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DiaryBox from './DiaryBox';
import DiaryDateSelectView from './DiaryDateSelectView';
import NoDiary from './NoDiary';

const DiaryView = () => {
    const [diaries, setDiaries] = useState();

    useEffect(() => {
        fetch('http://localhost/api/v1/diary/all?id=jinkyumpark')
            .then((res) => {
                return res.json();
            })
            .then((diaries) => {
                setDiaries(diaries);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='row justify-content-center m-0 p-0'>
            <DiaryDateSelectView />

            {!diaries ? (
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

export default DiaryView;
