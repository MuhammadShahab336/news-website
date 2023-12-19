import React from 'react';
import {Button, Form} from "react-bootstrap";
import { useForm, Controller } from 'react-hook-form';
import { MultiSelect } from 'react-multi-select-component';
import {
    useGetAuthorsQuery,
    useGetCategoriesQuery,
    useGetSourcesQuery,
} from "../../redux/services/articleService";
import {useUpdatePreferencesMutation} from "../../redux/services/userService";
import {successToast} from "../../utils/responseUtils";

const PreferenceForm = ({ user, isProfileFetching }) => {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm();

    const { data: category, isLoading: isCatLoading } = useGetCategoriesQuery()
    const { data: source, isLoading: isSourceLoading } = useGetSourcesQuery()
    const { data: author, isLoading: isAuthorLoading } = useGetAuthorsQuery()

    const [updatePreferencesRequest, { isLoading, error } ] = useUpdatePreferencesMutation()

    const onSubmit = async (data) => {
        data.categories = data.categories?.map((category) => category.value)
        data.sources = data.sources?.map((source) => source.value)
        data.authors = data.authors?.map((author) => author.value)

        await updatePreferencesRequest(data).unwrap()
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
    };


    if(isCatLoading || isSourceLoading || isAuthorLoading || isProfileFetching) return <i className="fa-light fa-spinner fa-spin" />


    const categories = category?.data?.categories?.data
    const sources = source?.data?.sources?.data
    const authors = author?.data?.authors?.data
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {categories?.length > 0 && (
                    <Form.Group className="mb-3 small">
                        <Form.Label className="">
                            Categories
                        </Form.Label>
                        <Controller
                            name="categories"
                            control={control}
                            defaultValue={JSON.parse(user?.preferred_categories)?.length > 0 ? categories?.filter((i) => (JSON.parse(user?.preferred_categories)?.includes(i?.id)))?.map((j) => ({label: j?.name, value: j?.id})) : []}
                            rules={{ required: { value: true, message: 'This categories is required' } }}
                            render={({ field }) => (
                                <MultiSelect
                                    options={categories?.map((item) => ({label: item?.name, value: item?.id}))}
                                    value={field.value}
                                    onChange={(selected) => {
                                        field.onChange(selected)
                                    }}
                                    labelledBy="Select"
                                />
                            )}
                        />
                        {errors.categories && (
                            <Form.Text className="text-danger d-block ">
                                {errors.categories.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}

                {sources?.length > 0 && (
                    <Form.Group className="mb-3 small">
                        <Form.Label className="">
                            Sources
                        </Form.Label>
                        <Controller
                            name="sources"
                            control={control}
                            defaultValue={JSON.parse(user?.preferred_sources)?.length > 0 ? sources?.filter((i) => (JSON.parse(user?.preferred_sources)?.includes(i?.id)))?.map((j) => ({label: j?.name, value: j?.id})) : []}
                            rules={{ required: { value: true, message: 'This sources is required' } }}
                            render={({ field }) => (
                                <MultiSelect
                                    options={sources?.map((item) => ({label: item?.name, value: item?.id}))}
                                    value={field.value}
                                    onChange={(selected) => {
                                        field.onChange(selected)
                                    }}
                                    labelledBy="Select"
                                />
                            )}
                        />
                        {errors.sources && (
                            <Form.Text className="text-danger d-block ">
                                {errors.sources.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}

                {authors?.length > 0 && (
                    <Form.Group className="mb-3 small">
                        <Form.Label className="">
                            Authors
                        </Form.Label>
                        <Controller
                            name="authors"
                            control={control}
                            defaultValue={JSON.parse(user?.preferred_authors)?.length > 0 ? authors?.filter((i) => (JSON.parse(user?.preferred_authors)?.includes(i?.id)))?.map((j) => ({label: j?.name, value: j?.id})) : []}
                            rules={{ required: { value: true, message: 'This authors is required' } }}
                            render={({ field }) => (
                                <MultiSelect
                                    options={authors?.map((item) => ({label: item?.name, value: item?.id}))}
                                    value={field.value}
                                    onChange={(selected) => {
                                        field.onChange(selected)
                                    }}
                                    labelledBy="Select"
                                />
                            )}
                        />
                        {errors.authors && (
                            <Form.Text className="text-danger d-block ">
                                {errors.authors.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )}

                <Button
                    variant="dark"
                    type="submit"
                    disabled={isLoading}
                    className="w-100 rounded-0 shadow-none"
                >
                    {isLoading ? <i className="fa-light fa-spinner fa-spin" /> : 'Save Preference'}
                </Button>
            </Form>
        </>
    );
};

export default PreferenceForm;