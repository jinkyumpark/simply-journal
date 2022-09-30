// React
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Components
import Diary from './Diary';
import NotFound from '../common/NotFound';
// Bootstrap
import { Button } from 'react-bootstrap';

const DiaryDetailView = () => {
    const { id } = useParams();

    const diaryUrl = 'http://localhost/api/v1/diary/';
    const [diary, setDiary] = useState(null);

    let navigate = useNavigate();

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
        fetch(diaryUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: parseInt(id),
            }),
        })
            .then((res) => {
                const statusCode = res.status.toString();

                if (statusCode.startsWith('2')) {
                    alert('일기를 지웠어요');
                    navigate('/diary/all');
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
                {diary ? (
                    <Diary diary={diary} />
                ) : (
                    <NotFound message={'없는 일기거나 비공개 일기에요'} />
                )}
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
                                deleteDiary(id);
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
