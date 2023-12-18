import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsCard from "./NewsCard";
import {useGetArticlesQuery} from "../redux/services/articleService";

const ArticleCards = () => {
    const { data, isLoading, refetch } = useGetArticlesQuery()


    useEffect(() => {
        refetch()
    }, [])


    if(isLoading) return ''

    const articles = data?.data?.articles?.data
    return (
        <>
            <Container className="mt-5">
                <Row className="g-3">
                    {articles?.map((article) => (
                        <Col lg={4} key={article?.id}>
                            <NewsCard article={article} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ArticleCards;