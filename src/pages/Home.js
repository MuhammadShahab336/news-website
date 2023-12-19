import React, {useDeferredValue, useState} from 'react';
import {Container} from "react-bootstrap";
import {useGetArticlesQuery} from "../redux/services/articleService";
import {ArticleSection, SearchForm} from "../components/home";

const Home = () => {
    const [query, setQuery] = useState('')
    const [paginateUrl, setPaginateUrl] = useState('')
    const deferredQuery = useDeferredValue(query);

    const { data, isFetching, refetch } = useGetArticlesQuery({paginateUrl, deferredQuery})

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

            <ArticleSection
                data={data}
                isLoading={isFetching}
                refetch={refetch}
                setPaginateUrl={setPaginateUrl}
            />
        </>
    );
};

export default Home;
