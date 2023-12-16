import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useLoginMutation} from "../../redux/services/authService";
import {useGetProfileQuery, useUpdateProfileMutation} from "../../redux/services/userService";

const ProfileForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const { data ,isLoading: isProfileLoading} = useGetProfileQuery()
    const [updateProfileRequest, { isLoading, error } ] = useUpdateProfileMutation()

    const onUpdateProfile = async (data) => {
        delete data.email
        await updateProfileRequest(data).unwrap()
            .then((res) => {

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


    if (isProfileLoading) return <i className="fa-light fa-spinner fa-spin" />;

    return (
        <>
            <Form onSubmit={handleSubmit(onUpdateProfile)}>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        First Name
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Firstname Here..."
                        value={data?.data?.first_name}
                        {...register('first_name', { required: 'First Name is Required' } )}
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
                        placeholder="Enter Lastname Here..."
                        value={data?.data?.last_name}
                        {...register('last_name', { required: 'Last Name is Required' } )}
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
                        value={data?.data?.email}
                        readOnly={true}
                    />
                </Form.Group>

                <br />

                <Button
                    variant="dark"
                    type="submit"
                    className="w-100 rounded-0 shadow-none"
                >
                    {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Save Profile'}
                </Button>
            </Form>
        </>
    );
};

export default ProfileForm;