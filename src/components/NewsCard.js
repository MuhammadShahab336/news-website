import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

const NewsCard = () => {
    return (
        <>
            <Card className="shadow-none border-0 rounded-0 h-100">
                <Card.Img
                    role="button"
                    variant="top"
                    className="rounded-0"
                    src="https://ic-cdn.flipboard.com/npr.org/d67fe1e9a13de4090a0133c3c40709c39b3df2af/_medium.webp"
                />
                <Card.Body className="px-0">
                    <Card.Title role="button">
                        Why Egypt doesn't want Palestinians in Gaza to cross the border
                    </Card.Title>
                    <Card.Text className="small">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Card.Text>
                    <Card.Text className="small">
                        <strong>Scott Neuman - 12/27/2023</strong>
                    </Card.Text>
                    <Link to="/" className="btn btn-dark text-white rounded-3">
                        Read More
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default NewsCard;
