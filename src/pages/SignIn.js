import React from 'react';
import {Form, Button, Row, Col, Container} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useLoginMutation} from "../redux/services/authService";
import {useForm} from "react-hook-form";
import {successToast} from "../utils/responseUtils";

const SignIn = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const [loginRequest, { isLoading, error } ] = useLoginMutation()

    const onLogin = async (data) => {
        await loginRequest(data).unwrap()
            .then((res) => {
                successToast(res?.message)
                navigate('/')
            })
            .catch((err) => {
                console.log('err', err)
                if(err?.data?.errors) {
                    Object.entries(err?.data?.errors)?.forEach(([key, value]) => {
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
                        Sign In
                    </h1>
                    <Form onSubmit={handleSubmit(onLogin)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email Address"
                                className="shadow-none"
                                {...register('email', { required: 'Email is Required' } )}
                                isInvalid={errors.email}
                            />
                            {errors.email && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.email.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                className="shadow-none"
                                {...register('password', { required: 'Password is Required' } )}
                                isInvalid={errors.password}
                            />
                            {errors.password && (
                                <Form.Control.Feedback type="invalid">
                                    {errors.password.message}
                                </Form.Control.Feedback>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Remember me"
                                className="shadow-none"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                            disabled={isLoading}
                        >
                            {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Sign In'}
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
