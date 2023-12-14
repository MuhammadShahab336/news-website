import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsCard from "./NewsCard";

const ArticleCards = () => {
    return (
        <>
            <Container className="mt-5">
                <Row className="g-3">
                    <Col lg={4}>
                        <NewsCard />
                    </Col>
                    <Col lg={4}>
                        <NewsCard />
                    </Col>
                    <Col lg={4}>
                        <NewsCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ArticleCards;