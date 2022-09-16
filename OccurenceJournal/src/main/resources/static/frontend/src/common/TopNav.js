import React from 'react';

import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
} from 'react-bootstrap';

import { FaUserCircle as UserIcon } from 'react-icons/fa';

const TopNav = () => {
    // candidate : SImply Journal, 한줄일기
    let serviceName = 'Simply Journal';

    return (
        <Navbar bg='light' expand='lg'>
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

                    <Form className='d-flex'>
                        <Form.Control
                            type='search'
                            placeholder='일기 내용을 검색하세요'
                            className='me-2'
                            aria-label='Search'
                        />
                        <Button variant='outline-secondary col-3 me-2'>
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
