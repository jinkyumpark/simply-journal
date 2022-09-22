// React
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Bootstrap
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
} from 'react-bootstrap';
// Icons
import { FaUserCircle as UserIcon } from 'react-icons/fa';
import { useEffect } from 'react';

const TopNav = () => {
    // candidate : SImply Journal, 한줄일기
    let serviceName = 'Simply Journal';

    const [keyword, setKeyword] = useState(null);
    let navigate = useNavigate();
    const handleSearch = (key) => {
        if (key !== '' && key != null) {
            navigate('/search/' + key);
        } else {
            alert('검색어를 입력해 주세요');
        }
    };

    return (
        <Navbar bg='light' expand='lg' className='sticky-top'>
            <Container fluid>
                <Navbar.Brand href='/'>{serviceName}</Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav
                        className='me-auto my-2 my-lg-0'
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href='/diary/all'>일기보기</Nav.Link>
                        <Nav.Link href='/diary/write'>일기쓰기</Nav.Link>
                    </Nav>

                    <Form
                        className='d-flex'
                        onSubmit={() => {
                            return handleSearch(keyword);
                        }}
                    >
                        <Form.Control
                            type='search'
                            placeholder='일기 내용을 검색하세요'
                            className='me-2'
                            aria-label='Search'
                            onChange={(e) => {
                                setKeyword(e.target.value);
                            }}
                        />
                        <Button
                            variant='outline-secondary col-3 me-2'
                            type='submit'
                        >
                            검색
                        </Button>
                        <NavDropdown
                            title={
                                <UserIcon className='display-6 text-danger' />
                            }
                            id='navbarScrollingDropdown'
                            align='end'
                        >
                            <NavDropdown.Item href='/login'>
                                로그인
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/join'>
                                회원가입
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='/introduction'>
                                서비스 소개
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;
