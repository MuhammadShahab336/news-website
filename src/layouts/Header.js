import React from 'react';
import {Button, Col, Container, NavDropdown, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = React.useState(true)

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
                        {isLogin ? (
                            <Row className="g-0 align-items-center justify-content-end">
                                <Col xs="auto">
                                    <NavDropdown
                                        title={<p className="mb-0 d-inline">Shahab</p>}
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item onClick={() => navigate('/profile')}>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => setIsLogin(false)}>
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