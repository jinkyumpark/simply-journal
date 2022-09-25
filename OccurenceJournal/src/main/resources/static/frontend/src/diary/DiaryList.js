// React
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// Component
import Diary from './Diary';
import DiaryDateSelectView from './DiaryDateSelectBox';
import NotFound from '../common/NotFound';
import Page from '../common/Page';
import Loading from '../common/Loading';

const DiaryListView = () => {
    let location = useLocation();
    const { method } = useParams();

    const noDiaryMessage =
        '선택하신 기간내에는 일기가 없어요 어서 추가해 보세요!';
    const pageUrl = `/diary/list/${method}`;

    const [diaries, setDiaries] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const page =
            location.search.indexOf('page') === -1
                ? 1
                : location.search.substring(location.search.indexOf('=') + 1);
        setCurrentPage(page);

        fetch(
            `http://localhost/api/v1/diary?id=jinkyumpark&page=${
                page - 1
            }&method=${method.toUpperCase()}`
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
            <DiaryDateSelectView method={method} />

            {isLoading ? (
                <Loading />
            ) : !diaries ? (
                <NotFound message={noDiaryMessage} />
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
                    url={pageUrl}
                />
            </div>
        </div>
    );
};

export default DiaryListView;
