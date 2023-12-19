import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useUpdateProfileMutation} from "../../redux/services/userService";
import {successToast} from "../../utils/responseUtils";

const ProfileForm = ({ user, isProfileFetching }) => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const [updateProfileRequest, { isLoading, error } ] = useUpdateProfileMutation()

    const onUpdateProfile = async (data) => {
        delete data.email
        await updateProfileRequest(data).unwrap()
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
                }
            })
    }

    if (isProfileFetching) return <i className="fa-light fa-spinner fa-spin" />

    return (
        <>
            <Form onSubmit={handleSubmit(onUpdateProfile)}>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        First Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        {...register('first_name', {
                            required: 'First Name is Required',
                            value: user?.first_name
                        })}
                        isInvalid={errors.first_name}
                    />
                    {errors.first_name && (
                        <Form.Control.Feedback type="invalid">
                            {errors.first_name.message}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        Last Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        {...register('last_name', {
                            required: 'Last Name is Required',
                            value: user?.last_name
                        })}
                        isInvalid={errors.last_name}
                    />
                    {errors.last_name && (
                        <Form.Control.Feedback type="invalid">
                            {errors.last_name.message}
                        </Form.Control.Feedback>
                    )}
                </Form.Group>
                <Form.Group className="mb-3 small">
                    <Form.Label className="t">
                        Email
                    </Form.Label>
                    <Form.Control
                        type="email"
                        disabled={true}
                        placeholder="Enter Email Here..."
                        value={user?.email || ''}
                        readOnly={true}
                    />
                </Form.Group>

                <br />

                <Button
                    variant="dark"
                    type="submit"
                    disabled={isLoading}
                    className="w-100 rounded-0 shadow-none"
                >
                    {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Save Profile'}
                </Button>
            </Form>
        </>
    );
};

export default ProfileForm;
