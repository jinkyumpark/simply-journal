// React
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const DiaryWriteView = () => {
    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const monthDayLength = new Date(currentYear, currentMonth, 0).getDate();

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [selectedEmotion, setSelectedEmotion] = useState('NOTPROVIDED');
    const [content, setContent] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [isSpecial, setIsSpecial] = useState(false);

    const [validated, setValidated] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        fetch('http://localhost/api/v1/diary', {
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
                    alert('일기를 추가했어요!');
                    navigate('/diary/all');
                } else {
                    alert('일기를 추가할 수 없어요. 다시 시도해 주세요');
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setValidated(true);
    };

    return (
        <div className='container mt-5'>
            <div className='row'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <div className='row'>
                            <div className='col-4'>
                                <Form.Select
                                    size='lg'
                                    onChange={(e) =>
                                        setSelectedYear(e.target.value)
                                    }
                                >
                                    {[...Array(10).keys()].map((year) => {
                                        return (
                                            <option
                                                name='year'
                                                value={currentYear - year}
                                            >
                                                {currentYear - year + '년'}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </div>
                            <div className='col-4'>
                                <Form.Select
                                    size='lg'
                                    onChange={(e) =>
                                        setSelectedMonth(e.target.value)
                                    }
                                >
                                    {[...Array(12).keys()].map((month) => {
                                        return (
                                            <option
                                                name='month'
                                                value={month + 1}
                                                selected={
                                                    parseInt(currentMonth) ===
                                                    month + 1
                                                }
                                            >
                                                {month + 1 + '월'}
                                            </option>
                                        );
                                    })}
                                </Form.Select>
                            </div>
                            <div className='col-4'>
                                <Form.Select
                                    size='lg'
                                    onChange={(e) =>
                                        setSelectedDay(e.target.value)
                                    }
                                >
                                    {[...Array(monthDayLength).keys()].map(
                                        (day) => {
                                            return (
                                                <option
                                                    selected={
                                                        parseInt(currentDay) ===
                                                        day + 1
                                                    }
                                                    value={day + 1}
                                                >
                                                    {day + 1 + '일'}
                                                </option>
                                            );
                                        }
                                    )}
                                </Form.Select>
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <FloatingLabel
                            controlId='floatingSelect'
                            label='오늘 기분은 어떤가요?'
                        >
                            <Form.Select
                                aria-label='오늘 기분은 어떤가요?'
                                onChange={(e) =>
                                    setSelectedEmotion(e.target.value)
                                }
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
                            onChange={(e) => setIsPublic(e.target.value)}
                        />
                        <Form.Check
                            type='switch'
                            id='isSpecial'
                            label='이 날은 특별한 날인가요?'
                            onChange={(e) => setIsSpecial(e.target.value)}
                        />
                    </Form.Group>

                    <Button type='submit' className='mt-5 col-6'>
                        일기등록
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default DiaryWriteView;
