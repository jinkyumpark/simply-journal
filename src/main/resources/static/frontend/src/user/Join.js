import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Bootstrap
import { Form, Button, Row, Card } from 'react-bootstrap';
// Component
import DateSelect from '../common/DateSelect';
// Resources
import kakaoIcon from '../images/login-icon-kakao.PNG';
import naverIcon from '../images/login-icon-naver.PNG';
import googleIcon from '../images/login-icon-google.png';
import { useState } from 'react';

const Join = () => {
    const externalServiceJoinMessage = '외부 서비스로 가입하기';
    const loginSuggestionMessage = '이미 Simply Journal 회원이신가요?';

    return (
        <div className='container mt-5 mb-5'>
            <Row className='justify-content-center align-items-center'>
                <Card className='col-11 col-lg-6'>
                    <Card.Body className='p-5'>
                        <h3 className='text-center'>가입하기</h3>

                        <JoinForm />

                        <hr className='mt-4' />

                        <h6 className='text-center text-secondary'>
                            {externalServiceJoinMessage}
                        </h6>
                        <JoinExternalService />

                        <hr className='mt-4' />
                        <h6 className='text-center text-secondary'>
                            {loginSuggestionMessage}{' '}
                            <Link to='/login' className='text-decoration-none'>
                                로그인하기
                            </Link>
                        </h6>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

const JoinForm = () => {
    const joinApiUrl = '';
    const errorMessage = '';
    const successMessage = '';
    const successRedirectUrl = '';
    const failMessage = '';

    let navigate = useNavigate();

    const [currentYear, currentMonth, currentDay] = new Date()
        .toISOString()
        .split('T')[0]
        .split('-');
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [selectedDay, setSelectedDay] = useState(currentDay);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleJoin = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
        }

        fetch(joinApiUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                birthDate:
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
                alert(errorMessage);
            });
    };

    return (
        <Form noValidate onSubmit={handleJoin}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='아이디로 사용될 이메일 주소를 입력해 주세요'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='비밀번호를 입력해 주세요'
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>생년월일</Form.Label>
                <DateSelect
                    setSelectedYear={setSelectedYear}
                    setSelectedMonth={setSelectedMonth}
                    setSelectedDay={setSelectedDay}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>이름</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='이름을 알려주세요'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </Form.Group>

            <div className='row justify-content-center'>
                <div className='col-12 col-lg-6'>
                    <Button variant='primary' type='submit' className='col-12'>
                        가입하기
                    </Button>
                </div>
                <div className='col-12 col-lg-6 mt-3 m-lg-0'>
                    <Button variant='danger' className='col-12'>
                        다시 입력하기
                    </Button>
                </div>
            </div>
        </Form>
    );
};

const JoinExternalService = () => {
    const loginIconStyle = {
        width: '50px',
        height: '50px',
    };

    return (
        <div className='row justify-content-center align-items-center mt-4'>
            <div className='col-3 text-center'>
                <img
                    src={kakaoIcon}
                    className='img-fluid'
                    style={loginIconStyle}
                />
            </div>
            <div className='col-3 text-center'>
                <img
                    src={naverIcon}
                    className='img-fluid'
                    style={loginIconStyle}
                />
            </div>
            <div className='col-3 text-center'>
                <img
                    src={googleIcon}
                    className='img-fluid'
                    style={loginIconStyle}
                />
            </div>
        </div>
    );
};

export default Join;
