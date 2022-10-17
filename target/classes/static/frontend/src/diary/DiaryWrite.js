// React
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import DateSelect from '../common/DateSelect';

const DiaryWrite = () => {
    const postDiaryUrl = 'http://localhost/api/v1/diary';
    const successMessage = '일기를 추가했어요!';
    const successRedirectUrl = '/diary/list/month';
    const failMessage = '일기를 추가할 수 없어요. 다시 시도해 주세요';

    let navigate = useNavigate();

    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [selectedEmotion, setSelectedEmotion] = useState('NOTPROVIDED');
    const [isPublic, setIsPublic] = useState(false);
    const [content, setContent] = useState('');
    const [isSpecial, setIsSpecial] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        fetch(postDiaryUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                memberId: 2,
                diaryDate:
                    selectedYear +
                    '-' +
                    (selectedMonth.length === 1
                        ? '0' + selectedMonth
                        : selectedMonth) +
                    '-' +
                    (selectedDay.length === 1
                        ? '0' + selectedDay
                        : selectedDay) +
                    'T00:00',
                content: content,
                emotion: selectedEmotion,
                isSpecial: isSpecial,
                isPublic: isPublic,
            }),
        })
            .then((res) => {
                const statusCode = res.status.toString();

                if (statusCode.startsWith('2')) {
                    alert(successMessage);
                    navigate(successRedirectUrl);
                } else {
                    alert(failMessage);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setValidated(true);
    };

    return (
        <div className='container mt-5'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <DateSelect
                        setSelectedYear={setSelectedYear}
                        setSelectedMonth={setSelectedMonth}
                        setSelectedDay={setSelectedDay}
                    />
                </Form.Group>

                <Form.Group className='mb-3'>
                    <FloatingLabel
                        controlId='floatingSelect'
                        label='오늘 기분은 어떤가요?'
                    >
                        <Form.Select
                            aria-label='오늘 기분은 어떤가요?'
                            onChange={(e) => setSelectedEmotion(e.target.value)}
                        >
                            <option value='NOTPROVIDED'>모르겠어요</option>
                            <option value='VERYHAPPY'>너무 좋아요!</option>
                            <option value='HAPPY'>좋아요</option>
                            <option value='SAD'>슬퍼요</option>
                            <option value='ANGRY'>화나요</option>
                            <option value='NEUTRAL'>그냥 평범해요</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group>
                    <FloatingLabel controlId='' label='한 줄 일기'>
                        <Form.Control
                            required
                            as='textarea'
                            placeholder='Leave a comment here'
                            style={{ height: '100px' }}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid'>
                            한 줄이라도 써 주세요!
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className='mt-4 col-12 col-lg-3'>
                    <Form.Check
                        type='switch'
                        name='isPublic'
                        label='전체 공개로 하기'
                        onChange={() => setIsPublic(!isPublic)}
                    />
                    <Form.Check
                        type='switch'
                        id='isSpecial'
                        label='이 날은 특별한 날인가요?'
                        onChange={() => setIsSpecial(!isSpecial)}
                    />
                </Form.Group>

                <div className='row justify-content-center'>
                    <Button type='submit' className='mt-5 col-11 col-lg-6'>
                        일기등록
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default DiaryWrite;
