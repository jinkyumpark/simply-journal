// React
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Component
import Diary from './Diary';
import DiaryDateSelectView from './DiaryDateSelectView';
import NotFound from '../common/NotFound';
import Page from '../common/Page';

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

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    let location = useLocation();

    useEffect(() => {
        const page =
            location.search.length === 0
                ? 1
                : location.search.substring(location.search.indexOf('=') + 1);
        setCurrentPage(page);

        fetch(
            `http://localhost/api/v1/diary/all?id=jinkyumpark&page=${page - 1}`
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setDiaries(res.content);
                setTotalPages(res.totalPages);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='row justify-content-center m-0 p-0'>
            <DiaryDateSelectView />

            {isLoading ? (
                <LoadingView />
            ) : !diaries ? (
                <NotFound
                    message={'이번달은 일기가 없어요 어서 추가해 보세요!'}
                />
            ) : (
                diaries.map((diary) => {
                    return (
                        <Link
                            to={`/diary/${diary.id}`}
                            className='text-decoration-none text-black col-xl-7 col-11'
                        >
                            <Diary diary={diary} />
                        </Link>
                    );
                })
            )}

            <div className='mt-5 mb-5'>
                <Page
                    totalPages={totalPages}
                    currentPage={currentPage}
                    url={'/diary/all'}
                />
            </div>
        </div>
    );
};

export default DiaryListView;
