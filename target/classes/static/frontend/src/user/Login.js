import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import { Form, Button, Row, Card } from 'react-bootstrap';
// Resources
import kakaoIcon from '../images/login-icon-kakao.PNG';
import naverIcon from '../images/login-icon-naver.PNG';
import googleIcon from '../images/login-icon-google.png';

const Login = () => {
    const externalServiceLoginMessage = '외부 서비스로 로그인하기';
    const joinSuggestionMessage = '아직 Simply Journal 회원이 아니신가요?';

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className='container mt-5'>
            <Row className='justify-content-center align-items-center'>
                <Card className='col-10 col-lg-5'>
                    <Card.Body className='p-5'>
                        <h3 className='text-center'>로그인</h3>

                        <LoginForm handleLogin={handleLogin} />

                        <hr className='mt-4' />

                        <h6 className='text-center text-secondary'>
                            {externalServiceLoginMessage}
                        </h6>
                        <LoginServices />

                        <hr className='mt-4' />
                        <h6 className='text-center text-secondary'>
                            {joinSuggestionMessage}{' '}
                            <Link to='/join' className='text-decoration-none'>
                                가입하기
                            </Link>
                        </h6>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

const LoginForm = ({ handleLogin }) => {
    return (
        <Form noValidate onSubmit={handleLogin}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='아이디로 사용되는 이메일 주소를 입력해 주세요'
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='비밀번호를 입력해 주세요'
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='로그인 상태 유지하기' />
            </Form.Group>

            <div className='row justify-content-center'>
                <Button variant='success' type='submit' className='col-11  '>
                    로그인
                </Button>
            </div>
        </Form>
    );
};

const LoginServices = () => {
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

export default Login;
