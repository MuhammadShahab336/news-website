import React from 'react';
import {Button, Form, Modal, Col, Row} from "react-bootstrap";

const FilterFormModal = (props) => {
    const {show, handleClose} = props;

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title className="h5 m-0">
                        Filter News
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-0 small">
                            <Form.Label className="fw-bold small">
                                Category
                            </Form.Label>
                            <Row>
                                {['checkbox 1', 'checkbox 2'].map((type) => (
                                    <Col
                                        lg="auto"
                                        key={`default-${type}`}
                                        className="mb-3"
                                    >
                                        <Form.Check // prettier-ignore
                                            type="checkbox"
                                            id={`default-${type}`}
                                            label={`${type}`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0 small">
                            <Form.Label className="fw-bold small">
                                Sources
                            </Form.Label>
                            <Row>
                                {['checkbox 1', 'checkbox 2'].map((type) => (
                                    <Col
                                        lg="auto"
                                        key={`default-${type}`}
                                        className="mb-3"
                                    >
                                        <Form.Check // prettier-ignore
                                            type="checkbox"
                                            id={`default-${type}`}
                                            label={`${type}`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-0 small">
                            <Form.Label className="fw-bold small">
                                Date
                            </Form.Label>
                            <Form.Control
                                type="date"
                                className="shadow-none form-control-sm w-auto"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <Button
                        variant="dark"
                        className="rounded-3 btn-sm me-auto"
                        onClick={handleClose}
                    >
                        Apply Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FilterFormModal;