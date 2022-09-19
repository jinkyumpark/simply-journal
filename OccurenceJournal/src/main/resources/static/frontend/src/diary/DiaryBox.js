import React from 'react';
import Card from 'react-bootstrap/Card';
import {
    RiEmotionHappyLine as HappyIcon,
    RiEmotionNormalLine as NeutralIcon,
    RiEmotionSadLine as SadIcon,
    RiEmotionLaughLine as VeryHappyIcon,
} from 'react-icons/ri';
import { ImAngry as AngryIcon } from 'react-icons/im';
import { MdOutlineDoNotDisturbAlt as NoEmotionIcon } from 'react-icons/md';

// Happy, Neutral, Sad, Angry, Very Happy

const DiaryBox = ({ diary }) => {
    const emotionColorMap = new Map([
        ['HAPPY', 'success'],
        ['NEUTRAL', 'warning'],
        ['SAD', 'primary'],
        ['ANGRY', 'danger'],
        ['VERYHAPPY', 'success'],
        ['NOTPROVIDED', 'dark'],
    ]);

    return (
        <Card className='m-3 p-0 col-xl-6 col-11'>
            <Card.Header
                className={
                    'd-flex justify-content-between align-items-center text-white bg-' +
                    emotionColorMap.get(diary.emotion)
                }
            >
                <h4>
                    {diary.diaryDate
                        .substring(0, diary.diaryDate.indexOf('T'))
                        .replace('-', '년 ')
                        .replace('-', '월 ')
                        .concat('일')}
                </h4>
                <div className='display-6 mb-1'>
                    {diary.emotion === 'HAPPY' ? (
                        <VeryHappyIcon />
                    ) : diary.emotion === 'SAD' ? (
                        <SadIcon />
                    ) : diary.emotion === 'ANGRY' ? (
                        <AngryIcon />
                    ) : diary.emotion === 'NEUTRAL' ? (
                        <NeutralIcon />
                    ) : diary.emotion === 'VERYHAPPY' ? (
                        <VeryHappyIcon />
                    ) : (
                        <NoEmotionIcon />
                    )}
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Text className='p-2 flex-start'>
                    {diary.content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default DiaryBox;
