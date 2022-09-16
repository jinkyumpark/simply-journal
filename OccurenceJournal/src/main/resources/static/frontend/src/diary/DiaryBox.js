import React from 'react';
import Card from 'react-bootstrap/Card';

// Happy, Neutral, Sad, Angry, Very Happy

import {
    RiEmotionHappyLine as HappyIcon,
    RiEmotionNormalLine as NeutralIcon,
    RiEmotionSadLine as SadIcon,
    RiEmotionLaughLine as VeryHappyIcon,
} from 'react-icons/ri';
import { ImAngry as AngryIcon } from 'react-icons/im';
import { MdOutlineDoNotDisturbAlt as NoEmotionIcon } from 'react-icons/md';

const DiaryBox = ({ diary }) => {
    const emotionColorMap = new Map([
        ['HAPPY', 'success'],
        ['NEUTRAL', 'warning'],
        ['SAD', 'primary'],
        ['ANGRY', 'danger'],
        ['VERYHAPPY', 'success'],
        ['NOTPROVIDED', 'gray'],
    ]);

    return (
        <Card className='m-3'>
            <Card.Header
                className={
                    'd-flex justify-content-between align-items-center text-white bg-' +
                    emotionColorMap.get(diary.emotion)
                }
            >
                <div className='h4'>
                    {diary.postDate
                        .substring(0, diary.postDate.indexOf('T'))
                        .replace('-', '년 ')
                        .replace('-', '월 ')
                        .concat('일')}
                </div>
                <div className='display-6 mt-0'>
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
                <Card.Text>{diary.content}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default DiaryBox;
