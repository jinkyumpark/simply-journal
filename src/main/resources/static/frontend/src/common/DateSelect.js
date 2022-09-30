import React from 'react';
import Form from 'react-bootstrap/Form';

const DateSelect = ({ setSelectedYear, setSelectedMonth, setSelectedDay }) => {
    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const monthDayLength = new Date(currentYear, currentMonth, 0).getDate();

    return (
        <div className='row'>
            <div className='col-4'>
                <Form.Select
                    size='lg'
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    {[...Array(10).keys()].map((year) => {
                        return (
                            <option name='year' value={currentYear - year}>
                                {currentYear - year + '년'}
                            </option>
                        );
                    })}
                </Form.Select>
            </div>
            <div className='col-4'>
                <Form.Select
                    size='lg'
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    {[...Array(12).keys()].map((month) => {
                        return (
                            <option
                                name='month'
                                value={month + 1}
                                selected={parseInt(currentMonth) === month + 1}
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
                    onChange={(e) => setSelectedDay(e.target.value)}
                >
                    {[...Array(monthDayLength).keys()].map((day) => {
                        return (
                            <option
                                selected={parseInt(currentDay) === day + 1}
                                value={day + 1}
                            >
                                {day + 1 + '일'}
                            </option>
                        );
                    })}
                </Form.Select>
            </div>
        </div>
    );
};

export default DateSelect;
