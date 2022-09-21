import React from 'react';
import DiaryBox from './DiaryBox';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import NoDiary from './NoDiary';

import { Button } from 'react-bootstrap';

const DiaryDetailView = () => {
    const { id } = useParams();
    const diaryUrl = 'http://localhost/api/v1/diary/';

    const [diary, setDiary] = useState(null);

    useEffect(() => {
        fetch(diaryUrl + id)
            .then((res) => {
                return res.json();
            })
            .then((diary) => {
                setDiary(diary);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container '>
            <div className='row justify-content-center'>
                {diary ? <DiaryBox diary={diary} /> : <NoDiary />}
            </div>

            <div className='row justify-content-center'>
                <div className='col-5 col-lg-3'>
                    <Button variant='warning' className='col-12'>
                        수정하기
                    </Button>
                </div>
                <div className='col-5 col-lg-3'>
                    <Button variant='danger' className='col-12'>
                        삭제하기
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DiaryDetailView;
