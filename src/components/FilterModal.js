import React, {useEffect} from 'react';
import {Button, Form, Modal, Col, Row} from "react-bootstrap";
import {useGetAuthorQuery, useGetCategoryQuery, useGetSourceQuery} from "../redux/services/articleService";
import {Controller, useForm} from "react-hook-form";
import {dateFormatReverse} from "../utils/responseUtils";
import {useSelector} from "react-redux";

const FilterModal = (props) => {
    const {show, handleClose, setQuery, preferred_categories, preferred_sources, preferred_authors} = props;

    const {
        control,
        register,
        handleSubmit,
        setValue,
        setError,
        formState: {errors},
    } = useForm()

    const { data: category, isLoading : isCategoryLoading } = useGetCategoryQuery()
    const { data: source, isLoading: isSourceLoading } = useGetSourceQuery()
    const { data: author, isLoading: isAuthorLoading } = useGetAuthorQuery()

    const onSearch = (data) => {
        // data.categories = data.categories?.join(',')
        let query = '?'
        console.log('data', data)
        if(data.categories) {
            data.categories = data?.categories?.filter(j => j != false)?.join(',')
            query += `categories=${data.categories}`
        }
        if(data.sources) {
            data.sources = data?.sources?.filter(j => j != false)?.join(',')
            query += `&sources=${data.sources}`
        }
        if(data.authors) {
            data.authors = data?.authors?.filter(j => j != false)?.join(',')
            query += `&authors=${data?.authors}`
        }
        if(data.date) {
            query += `&date=${dateFormatReverse(data?.date)}`
        }
        setQuery(query)
        handleClose()
    }


    console.log('preferred_categories;o', preferred_categories)


    if(isCategoryLoading || isSourceLoading || isAuthorLoading) return <i className="fa-light fa-spinner fa-spin" />

    const categories = category?.data?.categories?.data
    const sources = source?.data?.sources?.data
    const authors = author?.data?.authors?.data

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="rounded-0"
            >
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title className="h5 m-0">
                        Filter Articles
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="search-form" onSubmit={handleSubmit(onSearch)}>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Category
                            </Form.Label>
                            <Row>
                                {categories?.map((category) => (
                                    <Col
                                        lg="auto"
                                        key={category?.id}
                                        className="mb-3"
                                    >
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={`${category?.id}`}
                                                defaultChecked={preferred_categories?.includes(category?.id)}
                                                id={`check${category?.id}`}
                                                {...register(`categories.${category?.id}`)}
                                            />
                                            <label className="form-check-label" htmlFor={`check${category?.id}`}>
                                                {category?.name}
                                            </label>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Sources
                            </Form.Label>
                            <Row>
                                {sources?.map((source) => (
                                    <Col
                                        lg="auto"
                                        key={source?.id}
                                        className="mb-3"
                                    >
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={`${source?.id}`}
                                                defaultChecked={preferred_sources?.includes(source?.id)}
                                                id={`source${source?.id}`}
                                                {...register(`sources.${source?.id}`)}
                                            />
                                            <label className="form-check-label" htmlFor={`source${source?.id}`}>
                                                {source?.name}
                                            </label>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Author
                            </Form.Label>
                            <Row>
                                {authors?.map((author) => (
                                    <Col
                                        lg="auto"
                                        key={author?.id}
                                        className="mb-3"
                                    >
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={`${author?.id}`}
                                                defaultChecked={preferred_authors?.includes(author?.id)}
                                                id={`author${author?.id}`}
                                                {...register(`authors.${author?.id}`)}
                                            />
                                            <label className="form-check-label" htmlFor={`author${author?.id}`}>
                                                {author?.name}
                                            </label>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Date
                            </Form.Label>
                            <Form.Control
                                type="date"
                                className="shadow-none"
                                {...register('date')}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button
                        variant="dark"
                        type="submit"
                        form="search-form"
                        className="rounded-3 me-auto"
                    >
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilterModal;
