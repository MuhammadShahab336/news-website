import React from 'react';
import {Form, Button, Row, Col, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <Container>
            <Row className="vh-100 align-items-center justify-content-center">
                <Col lg={5}>
                    <h1 className="text-center fw-bold">
                        Sign In
                    </h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                className="shadow-none"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                className="shadow-none"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Remember me"
                                className="shadow-none"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Sign In
                        </Button>
                        <div className="mt-4">
                            <p className="small text-center">
                                Don't have an account?
                                {' '}
                                <Link
                                    to="/signup"
                                    className="text-decoration-none"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignIn;