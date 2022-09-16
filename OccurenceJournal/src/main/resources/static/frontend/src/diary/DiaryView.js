import React from 'react';
import DiaryBox from './DiaryBox';

const DiaryView = () => {
    let diaries = [
        {
            id: 1,
            postDate: '2022-09-01T17:45',
            content:
                '여친이랑 데이트. 여친이 영등포 와서 점심으로 BHC 포테킹 먹음. 중간에 한남 주제로 잠깐 싸움? 같은걸 함. 별건 아니고 잘 해결됨',
            emotion: 'VERYHAPPY',
        },
        {
            id: 2,
            postDate: '2022-09-02T17:45',
            content:
                '친구 재영 결혼식에서 하객 접대 도와줘서 친구가 밥 사줌. 처음에는 윤씨밀방 가려고 했는데 새로운거 먹어보자고 친구가 해서 무한리필 고기집 가게 됐음. 너무 많이 먹어서 가다가 토함. 노래방 가기로 했는데 얘기하다 보니 늦어져서 그냥 집 옴.',
            emotion: 'SAD',
        },
        {
            id: 3,
            postDate: '2022-09-03T17:45',
            content:
                '순호형 전역해서 김포공항으로 마중 감. 밤을 새서 너무 졸렸음. 아침에는 도서관에 가서 예약한 책 받아옴',
            emotion: 'ANGRY',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
        {
            id: 4,
            postDate: '2022-09-10T17:45',
            content:
                '추석 맞이해서 집에 갔고 일산 성현이형네 갔다 옴. 할아버지 납골당도 갔다 옴',
            emotion: 'NEUTRAL',
        },
    ];

    return (
        <div>
            {diaries.map((diary) => {
                return <DiaryBox diary={diary} />;
            })}
        </div>
    );
};

export default DiaryView;
