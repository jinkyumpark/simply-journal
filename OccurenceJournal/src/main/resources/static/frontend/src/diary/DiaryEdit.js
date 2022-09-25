// React
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect } from 'react';
import NotFound from '../common/NotFound';

const DiaryEdit = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [isNotFound, setIsNotFound] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(
            JSON.stringify({
                date: `${selectedYear}-${
                    selectedMonth.length === 1
                        ? '0' + selectedMonth
                        : selectedMonth
                }-${
                    selectedDay.length === 1 ? '0' + selectedDay : selectedDay
                }T00:00`,
                content: content,
                emotion: selectedEmotion,
                isSpecial: isSpecial,
                isPublic: isPublic,
            })
        );

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
        }

        fetch(`http://localhost/api/v1/diary/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                date: `${selectedYear}-${
                    selectedMonth.length === 1
                        ? '0' + selectedMonth
                        : selectedMonth
                }-${
                    selectedDay.length === 1 ? '0' + selectedDay : selectedDay
                }T00:00`,
                content: content,
                emotion: selectedEmotion,
                isSpecial: isSpecial,
                isPublic: isPublic,
            }),
        })
            .then((res) => {
                const statusCode = res.status.toString();

                if (statusCode.startsWith('2')) {
                    alert('일기를 수정했어요');
                    navigate(`/diary/${id}`);
                } else {
                    alert('일기를 수정할 수 없어요. 다시 시도해 주세요');
                }
            })
            .catch((err) => {
                console.log(err);
            });
        setValidated(true);
    };

    useEffect(() => {
        fetch(`http://localhost/api/v1/diary/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((diary) => {
                setContent(diary.content);
                setSelectedEmotion(diary.emotion);
                setIsSpecial(diary.isSpecial);
                setIsPublic(diary.isPublic);

                const rawDate = diary.diaryDate;
                setSelectedYear(rawDate.substring(0, 4));
                setSelectedMonth(rawDate.substring(5, 7));
                setSelectedDay(rawDate.substring(8, 10));
            })
            .catch((err) => {
                setIsNotFound(true);
            });
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                {isNotFound ? (
                    <NotFound />
                ) : (
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className='mb-3'>
                            <div className='row'>
                                <div className='col-4'>
                                    <Form.Select
                                        size='lg'
                                        onChange={(e) =>
                                            setSelectedYear(e.target.value)
                                        }
                                        value={selectedYear}
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
                                                        parseInt(
                                                            selectedMonth
                                                        ) ===
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
                                                            parseInt(
                                                                selectedDay
                                                            ) ===
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
                                    value={selectedEmotion}
                                >
                                    <option value='NOTPROVIDED'>
                                        모르겠어요
                                    </option>
                                    <option value='VERYHAPPY'>
                                        너무 좋아요!
                                    </option>
                                    <option value='HAPPY'>좋아요</option>
                                    <option value='SAD'>슬퍼요</option>
                                    <option value='ANGRY'>화나요</option>
                                    <option value='NEUTRAL'>
                                        그냥 평범해요
                                    </option>
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
                                    value={content}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    한 줄이라도 써 주세요!
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className='mt-4 col-12 col-lg-3'>
                            <Form.Check
                                type='switch'
                                label='전체 공개로 하기'
                                id='is-public-switch'
                                onChange={() => setIsPublic(!isPublic)}
                                defaultChecked={isPublic}
                            />
                            <Form.Check
                                type='switch'
                                label='이 날은 특별한 날인가요?'
                                id='is-special-switch'
                                onChange={() => {
                                    setIsSpecial(!isSpecial);
                                }}
                                defaultChecked={isSpecial}
                            />
                        </Form.Group>

                        <Button type='submit' className='mt-5 col-6'>
                            일기수정
                        </Button>
                    </Form>
                )}
            </div>
        </div>
    );
};

export default DiaryEdit;
