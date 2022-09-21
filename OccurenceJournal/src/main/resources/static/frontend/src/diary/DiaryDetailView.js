import React from 'react';
import DiaryBox from './Diary';
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

    const deleteDiary = (id) => {
        fetch('http://localhost/api/v1/diary/' + id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                const statusCode = res.status;

                if (statusCode.startsWith('2')) {
                    alert('일기를 지웠어요');
                } else {
                    alert('일기를 지울 수 없었어요. 다시 시도해 주세요');
                }
            })
            .catch((err) => {
                alert('일기를 지울 수 없었어요. 다시 시도해 주세요');
                console.log(err);
            });
    };

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
                    <Button
                        variant='danger'
                        className='col-12'
                        onClick={() => {
                            if (window.confirm('정말 일기를 삭제할까요?')) {
                                deleteDiary(diary.id);
                            }
                        }}
                    >
                        삭제하기
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DiaryDetailView;
