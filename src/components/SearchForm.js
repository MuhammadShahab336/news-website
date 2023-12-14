import React, {useState} from 'react';
import {Button, Col, Container, Row, Form} from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse';
import FilterModal from "./FilterModal";

const SearchForm = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <>
            <Container fluid className="mt-5 d-flex justify-content-center">
                <Col lg={6} xs={12}>
                    <Row className="g-0 p-2 rounded-3 shadow-sm mx-auto bg-light border align-items-center">
                        <Col>
                            <Form.Control
                                type="search"
                                placeholder="Search News Here..."
                                className="border-0 shadow-none bg-transparent"
                            />
                        </Col>
                        <Col xs="auto" className="align-self-stretch">
                            <div className="vr h-100" />
                        </Col>
                        <Col xs="auto">
                            <Row
                                className="gx-2 gy-0 px-2 align-items-center"
                                role="button"
                                onClick={handleShow}
                            >
                                <Col>
                                    <h6 className="mb-0 text-dark">Filter</h6>
                                </Col>
                                <Col>
                                    <i
                                        className="fa-sharp fa-regular fa-filter-list d-block h5 mb-0"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>

            <FilterModal
                show={show}
                handleClose={handleClose}
            />
        </>
    );
};

export default SearchForm;