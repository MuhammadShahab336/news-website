import React from 'react';
import {Button, Col, Container, NavDropdown, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/slices/authSlice";

const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <Container
                fluid
                className="bg-header"
            >
                <Row className="py-2 align-items-center">
                    <Col xs="auto">
                        <h1
                            className="mb-0"
                            role="button"
                            onClick={() => navigate('/')}
                        >
                            Newzy
                        </h1>
                    </Col>
                    <Col>
                        {isAuthenticated ? (
                            <Row className="g-0 align-items-center justify-content-end">
                                <Col xs="auto">
                                    <NavDropdown
                                        title={<p className="mb-0 d-inline">{user?.first_name+' '+user?.last_name}</p>}
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item onClick={() => navigate('/profile')}>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => dispatch(logout())}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Col>
                            </Row>
                        ) : (
                            <Row className="h-100 gx-2 align-items-center justify-content-end">
                                <Col xs="auto">
                                    <Button
                                        onClick={() => navigate('/signup')}
                                        variant="primary"
                                    >
                                        Sign Up
                                    </Button>
                                </Col>
                                <Col xs="auto">
                                    <Button
                                        onClick={() => navigate('/signin')}
                                        variant="dark"
                                    >
                                        Sign In
                                    </Button>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;
