import React from 'react';
import {Button, Form, Modal, Col, Row} from "react-bootstrap";
import {useGetAuthorQuery, useGetCategoryQuery, useGetSourceQuery} from "../redux/services/articleService";

const FilterModal = (props) => {
    const {show, handleClose} = props;

    const { data: category, isLoading } = useGetCategoryQuery()
    const { data: source } = useGetSourceQuery()
    const { data: author } = useGetAuthorQuery()


    if(isLoading) return ''

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
                    <Form>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Category
                            </Form.Label>
                            <Row>
                                {categories?.map((category) => (
                                    <Col
                                        lg="auto"
                                        key={`cat-${category?.id}`}
                                        className="mb-3"
                                    >
                                        <Form.Check // prettier-ignore
                                            type="checkbox"
                                            id={`cat-${category?.id}`}
                                            label={`${category?.name}`}
                                        />
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
                                        key={`source-${source?.id}`}
                                        className="mb-3"
                                    >
                                        <Form.Check // prettier-ignore
                                            type="checkbox"
                                            id={`source-${source?.id}`}
                                            label={`${source?.name}`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Author
                            </Form.Label>
                            <Form.Select>
                                <option value="">Please Selecct</option>
                                {authors?.map((author) => (
                                    <option value={`${author?.id}`}>{author?.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-0">
                            <Form.Label className="fw-bold">
                                Date
                            </Form.Label>
                            <Form.Control
                                type="date"
                                className="shadow-none"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button
                        variant="dark"
                        className="rounded-3 me-auto"
                        onClick={handleClose}
                    >
                        Search
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilterModal;
