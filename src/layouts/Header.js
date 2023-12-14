import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container
                fluid
                className="bg-header"
            >
                <Row className="py-2">
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
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;