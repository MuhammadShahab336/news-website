import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <Container>
            <Row className="vh-100 align-items-center justify-content-center">
                <Col lg={5}>
                    <h1 className="text-center fw-bold">
                        Sign Up
                    </h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name Here..."
                                className="shadow-none"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name Here..."
                                className="shadow-none"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                className="shadow-none"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                className="shadow-none"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 rounded-3">
                            Sign Up
                        </Button>
                        <div className="mt-4">
                            <p className="small text-center">
                                Do you already have an account?
                                {' '}
                                <Link
                                    to="/signin"
                                    className="text-decoration-none"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;