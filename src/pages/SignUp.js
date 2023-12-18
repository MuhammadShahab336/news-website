import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useRegisterMutation} from "../redux/services/authService";

const SignUp = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const [registerRequest, { isLoading, error } ] = useRegisterMutation()

    const onRegister = async (data) => {
        await registerRequest(data).unwrap()
            .then((res) => {
                navigate('/signin')
            })
            .catch((err) => {
                console.log('err', err)
                if(err?.data?.errors) {
                    Object.entries(err?.data?.errors)?.forEach(([key, value]) => {
                        console.log('value', value[0])
                        setError(key, { type: "custom", message: `${value[0]}` })
                    })
                }
            })
    }

    return (
        <Container>
            <Row className="vh-100 align-items-center justify-content-center">
                <Col lg={5}>
                    <h1 className="text-center fw-bold">
                        Sign Up
                    </h1>
                    <Form onSubmit={handleSubmit(onRegister)}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter First Name"
                                className="shadow-none"
                                {...register('first_name', { required: 'First Name is Required' } )}
                                isInvalid={errors.first_name}
                            />
                            {errors.first_name && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.first_name.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                className="shadow-none"
                                {...register('last_name', { required: 'Last Name is Required' } )}
                                isInvalid={errors.last_name}
                            />
                            {errors.last_name && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.last_name.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email Address"
                                className="shadow-none"
                                {...register('email', {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                } )}
                                isInvalid={errors.email}
                            />
                            {errors.email && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.email.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                className="shadow-none"
                                {...register('password', {
                                    required: 'Password is Required',
                                    minLength: {
                                        value: 8,
                                        message: 'Password must have at least 8 characters',
                                    },
                                } )}
                                isInvalid={errors.password}
                            />
                            {errors.password && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.password.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 rounded-3">
                            {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Sign Up'}
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
