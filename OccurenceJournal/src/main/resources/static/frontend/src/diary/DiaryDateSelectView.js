import { Button } from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';

const DiaryDateSelectView = () => {
    const [isRange, setIsRange] = useState(true);

    const selectedText = 'primary';
    const unselectedText = 'light';

    return (
        <div className='mt-5 mb-5 p-0 col-xl-6 col-11'>
            <Card className='mb-4'>
                <Card.Body>
                    <div className='row'>
                        <div className='col-6'>
                            <Button
                                className='col-12'
                                variant={
                                    isRange ? selectedText : unselectedText
                                }
                                onClick={() => {
                                    setIsRange(true);
                                }}
                            >
                                범위로 보기
                            </Button>
                        </div>
                        <div className='col-6'>
                            <Button
                                className='col-12'
                                variant={
                                    !isRange ? selectedText : unselectedText
                                }
                                onClick={() => {
                                    setIsRange(false);
                                }}
                            >
                                특정 기간 선택하기
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            {isRange ? <RangeSelectView /> : <DateSelectView />}
        </div>
    );
};

const RangeSelectView = () => {
    return (
        <Card>
            <Card.Body>
                <ToggleButtonGroup
                    type='radio'
                    name='options'
                    defaultValue={1}
                    className='col-12'
                >
                    <ToggleButton id='tbg-radio-1' value={1} className='col-3'>
                        이번 주
                    </ToggleButton>
                    <ToggleButton id='tbg-radio-2' value={2} className='col-3'>
                        이번 달
                    </ToggleButton>
                    <ToggleButton id='tbg-radio-3' value={3} className='col-3'>
                        이번 년도
                    </ToggleButton>
                    <ToggleButton id='tbg-radio-4' value={4} className='col-3'>
                        전체
                    </ToggleButton>
                </ToggleButtonGroup>
            </Card.Body>
        </Card>
    );
};

const DateSelectView = () => {
    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const monthDayLength = new Date(currentYear, currentMonth, 0).getDate();

    const [selectedStartYear, setSelectedStartYear] = useState(currentYear);
    const [selectedStartMonth, setSelectedStartMonth] = useState(currentMonth);
    const [selectedStartDay, setSelectedStartDay] = useState(currentDay);

    const [selectedEndYear, setSelectedEndYear] = useState(currentYear);
    const [selectedEndMonth, setSelectedEndMonth] = useState(currentMonth);
    const [selectedEndDay, setSelectedEndDay] = useState(currentDay);

    return (
        <>
            <Card>
                <Card.Header>시작 날짜</Card.Header>
                <Card.Body>
                    <Form.Group className='mb-3'>
                        <div className='row'>
                            <div className='col-4'>
                                <Form.Select
                                    size='lg'
                                    onChange={(e) =>
                                        setSelectedStartYear(e.target.value)
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
                                        setSelectedStartMonth(e.target.value)
                                    }
                                >
                                    {[...Array(12).keys()].map((month) => {
                                        return (
                                            <option
                                                name='month'
                                                value={month + 1}
                                                selected={
                                                    parseInt(currentMonth) ===
                                                    month + 2
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
                                        setSelectedStartDay(e.target.value)
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
                </Card.Body>
            </Card>

            <Card className='mt-3 mb-3'>
                <Card.Header>종료 날짜</Card.Header>
                <Card.Body>
                    <Form.Group className='mb-3'>
                        <div className='row'>
                            <div className='col-4'>
                                <Form.Select
                                    size='lg'
                                    onChange={(e) =>
                                        setSelectedEndYear(e.target.value)
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
                                        setSelectedEndMonth(e.target.value)
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
                                        setSelectedEndDay(e.target.value)
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
                </Card.Body>
            </Card>

            <Button className='col-12'>조회하기</Button>
        </>
    );
};

export default DiaryDateSelectView;