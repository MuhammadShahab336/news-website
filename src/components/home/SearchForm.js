import React, {useState} from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";
import {useSelector} from "react-redux";
import {FilterModal} from "./index";

const SearchForm = ({ setQuery }) => {
    const { preferred_authors, preferred_categories,preferred_sources } = useSelector((state) => state.auth?.user)

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleSearch = (e) => {
        if(e.target.value.length > 0) {
            setQuery(`?q=${e.target.value}`)
        } else {
            setQuery(' ')
        }
    }

    return (
        <>
            <Container fluid className="mt-5 d-flex justify-content-center">
                <Col lg={6} xs={12}>
                    <Row className="g-0 p-2 rounded-0 shadow-sm mx-auto bg-light border align-items-center">
                        <Col>
                            <Form.Control
                                type="search"
                                placeholder="Search Article Here..."
                                className="border-0 shadow-none bg-transparent"
                                onChange={handleSearch}
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

            {show && (
                <FilterModal
                    show={show}
                    handleClose={handleClose}
                    setQuery={setQuery}
                    preferred_categories={JSON.parse(preferred_categories)}
                    preferred_sources={JSON.parse(preferred_sources)}
                    preferred_authors={JSON.parse(preferred_authors)}
                />
            )}
        </>
    );
};

export default SearchForm;
