import React, {useDeferredValue, useState} from 'react';
import {Link} from "react-router-dom";
import SearchForm from "../components/SearchForm";
import ArticleCards from "../components/ArticleCards";
import {Container} from "react-bootstrap";
import {useGetArticlesQuery} from "../redux/services/articleService";

const Home = () => {
    const [query, setQuery] = useState('')
    const [paginateUrl, setPaginateUrl] = useState('')
    const deferredQuery = useDeferredValue(query);
    const { data, isFetching, refetch } = useGetArticlesQuery({paginateUrl, query})

    return (
        <>
            <Container className="mt-5">
                <h2 className="text-center">
                    Read The Latest Articles From <br /> Around The World
                </h2>
            </Container>

            <SearchForm
                setQuery={setQuery}
            />

            <ArticleCards
                data={data}
                isLoading={isFetching}
                refetch={refetch}
                setPaginateUrl={setPaginateUrl}
            />
        </>
    );
};

export default Home;
