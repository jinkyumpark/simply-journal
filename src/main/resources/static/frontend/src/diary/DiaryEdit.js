// React
import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import DateSelect from '../common/DateSelect';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useEffect } from 'react';
import NotFound from '../common/NotFound';

const DiaryEdit = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const editUrl = `http://localhost/api/v1/diary/${id}`;

    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedDay, setSelectedDay] = useState(currentDay);
    const [selectedEmotion, setSelectedEmotion] = useState('NOTPROVIDED');
    const [content, setContent] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [isSpecial, setIsSpecial] = useState(false);

    const [validated, setValidated] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

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
        fetch(editUrl)
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
                console.log(err);
            });
    }, []);

    return (
        <div className='container mt-5'>
            {isNotFound ? (
                <NotFound />
            ) : (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className='row'>
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
                                    <option value='SAD'>슬퍼요/우울해요</option>
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

                        <Form.Group className='row justify-content-center'>
                            <Button
                                type='submit'
                                className='mt-5 col-12 col-lg-6 ms-4'
                            >
                                일기수정
                            </Button>
                        </Form.Group>
                    </div>
                </Form>
            )}
        </div>
    );
};

export default DiaryEdit;
