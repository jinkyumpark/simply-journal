// React
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Diary from '../diary/Diary';
import NotFound from '../common/NotFound';

const SearchResultView = () => {
    const { key } = useParams();
    const [diaries, setDiaries] = useState(null);
    const diarySearchUrl = 'http://localhost/api/v1/diary/search/';

    useEffect(() => {
        fetch(diarySearchUrl + key)
            .then((res) => {
                return res.json();
            })
            .then((diariesResult) => {
                setDiaries(diariesResult);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {diaries &&
                    (diaries.length === 0 ? (
                        <div className='row'>
                            <NotFound message={'검색 결과가 없어요'} />
                            <h4 className='text-secondary mt-3'>
                                검색어를 다시 확인해 주세요 (입력하신 검색어 :{' '}
                                {key})
                            </h4>
                        </div>
                    ) : (
                        <>
                            <h4 className='mt-4 mb-4'>
                                총 {diaries.length}건의 검색결과
                            </h4>
                            {diaries.map((diary) => {
                                return (
                                    <Link
                                        to={`/diary/${diary.id}`}
                                        className='text-decoration-none text-black col-xl-7 col-11'
                                    >
                                        <Diary diary={diary} />
                                    </Link>
                                );
                            })}
                        </>
                    ))}
            </div>
        </div>
    );
};

export default SearchResultView;
