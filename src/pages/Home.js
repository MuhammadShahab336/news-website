import React from 'react';
import {Link} from "react-router-dom";
import SearchForm from "../components/SearchForm";
import ArticleCards from "../components/ArticleCards";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center">
                    Read The Leatest New From <br /> Around The World
                </h2>
            </Container>
            <SearchForm />
            <ArticleCards />
        </>
    );
};

export default Home;