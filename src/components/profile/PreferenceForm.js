import React from 'react';
import {Form} from "react-bootstrap";
import { useForm, Controller } from 'react-hook-form';
import { MultiSelect } from 'react-multi-select-component';

const PreferenceForm = () => {
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Options for the multi-select
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        // Add more options as needed
    ];

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
    };

    console.log('errors', errors)

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 small">
                    <Form.Label className="">
                        Current Password
                    </Form.Label>
                    <Controller
                        name="selectedOptions"
                        control={control}
                        defaultValue={[]}
                        rules={{ required: { value: true, message: 'This df is required' } }}
                        render={({ field }) => (
                            <MultiSelect
                                options={options}
                                value={field.value}
                                onChange={(selected) => {
                                    field.onChange(selected)
                                }}
                                labelledBy="Select"
                            />
                        )}
                    />
                    {errors.selectedOptions && (
                        <Form.Text className="text-danger d-block ">
                            {errors.selectedOptions.message}
                        </Form.Text>
                    )}

                    <button type="submit">Submit</button>

                </Form.Group>
            </Form>
        </>
    );
};

export default PreferenceForm;