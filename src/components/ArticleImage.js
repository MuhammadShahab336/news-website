import React from 'react';
import {Card} from "react-bootstrap";
import placeholderImage from "../assets/images/no-image-found.png";

const ArticleImage = ({ src }) => {

    const onImageError = (e) => {
        console.log('error', src)
        e.target.src = placeholderImage
    }
    return (
        <>
            {}
            <Card.Img
                role="button"
                variant="top"
                className="rounded-0 img-cover"
                src={src ? src : placeholderImage}
                alt="Article Image"
                onError={onImageError}
                height={200}
            />
        </>
    );
};

export default ArticleImage;