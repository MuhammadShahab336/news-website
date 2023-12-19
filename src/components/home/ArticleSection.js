import React from 'react';
import {Col, Container, Pagination, Row} from "react-bootstrap";
import {Article} from "./index";

const ArticleSection = ({ data, isLoading, refetch, setPaginateUrl }) => {

    // useEffect(() => {
    //     refetch()
    // }, [])

    if(isLoading) return <p className="text-center mt-5"><i className="fa-light fa-spinner fa-spin" /></p>

    const articles = data?.data?.articles?.data
    const pagination = data?.data?.articles?.links
    return (
        <>
            <Container className="mt-5">
                {articles?.length > 0 ? (
                    <Row className="g-3">
                        {articles?.map((article) => (
                            <Col lg={4} key={article?.id}>
                                <Article article={article} />
                            </Col>
                        ))}
                    </Row>
                ) :  (
                    <h2 className="text-center">No Articles Found</h2>
                )}

                <div className="row align-items-center justify-content-center py-4">
                    <div className="col-auto">
                        <div className="d-flex justify-content-end">
                            <Pagination className="m-0">
                                {pagination?.map((item, i) => {
                                    return (
                                        <>
                                            {i == 0 ? (
                                                <Pagination.Prev
                                                    onClick={() => typeof item?.url == 'string' && setPaginateUrl(item?.url)}
                                                />
                                            ) : pagination?.length - 1 == i ? (
                                                <Pagination.Next
                                                    onClick={() => typeof item?.url == 'string' && setPaginateUrl(item?.url)}
                                                />
                                            ) : (
                                                <>
                                                    {item?.label?.includes("...") ||
                                                    item?.active ||
                                                    (i >= 0 && i <= 2) ||
                                                    (i >= pagination?.length - 3 &&
                                                        i <= pagination?.length - 1) ? (
                                                        <Pagination.Item
                                                            active={item?.active}
                                                            onClick={() => typeof item?.url == 'string' && setPaginateUrl(item?.url)}
                                                        >
                                                            {item?.label}
                                                        </Pagination.Item>
                                                    ) : (
                                                        ""
                                                    )}
                                                </>
                                            )}
                                        </>
                                    );
                                })}
                            </Pagination>
                            <br />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ArticleSection;