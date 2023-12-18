import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import ArticleImage from "./ArticleImage";
import {dateFormat} from "../utils/responseUtils";

const NewsCard = ({ article }) => {
    return (
        <>
            <Card className="shadow-none border-0 rounded-0 h-100">
                <ArticleImage src={article?.image}/>
                <Card.Body className="px-0">
                    <Card.Title role="button">
                        {article?.title}
                    </Card.Title>
                    <Card.Text className="small">
                        {article?.description}
                    </Card.Text>
                    <Card.Text className="small">
                        <strong>
                            {article?.author?.name ? article?.author?.name : article?.source?.name}
                            {' '}-{' '}
                            {article?.published_at ? dateFormat(article?.published_at) : ''}
                        </strong>
                    </Card.Text>
                    <Link to={article?.url} target="_blank" className="btn btn-dark text-white rounded-3">
                        Read More
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default NewsCard;
