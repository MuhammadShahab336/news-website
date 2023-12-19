import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useChangePasswordMutation} from "../../redux/services/userService";
import {successToast} from "../../utils/responseUtils";

const ChangePasswordFrom = () => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const [changePasswordRequest, { isLoading, error } ] = useChangePasswordMutation()

    const onChangePassword = async (data) => {
        await changePasswordRequest(data).unwrap()
            .then((res) => {
                successToast(res?.message)
            })
            .catch((err) => {
                console.log('err', err)
                if(err?.data?.errors) {
                    Object.entries(err?.data?.errors)?.forEach(([key, value]) => {
                        console.log('value', value[0])
                        setError(key, { type: "custom", message: `${value[0]}` })
                    })
                } else if(err?.data?.message) {
                    setError('current_password', { type: "custom", message: `${err?.data?.message}` })
                }
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onChangePassword)}>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        Current Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        {...register('current_password', {
                            required: 'Current Password is Required',
                            minLength: {
                                value: 8,
                                message: 'Current Password must have at least 8 characters',
                            }
                        })}
                        isInvalid={errors.current_password}
                    />
                    {errors.current_password && (
                        <Form.Control.Feedback type="invalid">
                            {errors.current_password.message}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        New Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        {...register('password', {
                            required: 'New Password is Required',
                            minLength: {
                                value: 8,
                                message: 'New Password must have at least 8 characters',
                            }
                        })}
                        isInvalid={errors.password}
                    />
                    {errors.password && (
                        <Form.Control.Feedback type="invalid">
                            {errors.password.message}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group className="mb-3 small">
                    <Form.Label className="t">
                        Confirmed Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        {...register('confirm_password', {
                            required: 'Confirmed Password is Required',
                            minLength: {
                                value: 8,
                                message: 'Confirmed Password must have at least 8 characters',
                            }
                        })}
                        isInvalid={errors.confirm_password}
                    />
                    {errors.confirm_password && (
                        <Form.Control.Feedback type="invalid">
                            {errors.confirm_password.message}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <br />

                <Button
                    variant="dark"
                    type="submit"
                    disabled={isLoading}
                    className="w-100 rounded-0 shadow-none"
                >
                    {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Save Password'}
                </Button>
            </Form>
        </>
    );
};

export default ChangePasswordFrom;