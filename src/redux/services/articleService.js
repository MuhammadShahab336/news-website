import {newsApi} from './api'
import {
    ARTICLE_AUTHORS_ENDPOINT,
    ARTICLE_CATEGORIES_ENDPOINT,
    ARTICLE_SOURCES_ENDPOINT,
    ARTICLES_ENDPOINT,
} from "./apiConstants";

const articleApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => ({
                url: `${ARTICLE_CATEGORIES_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getSources: build.query({
            query: () => ({
                url: `${ARTICLE_SOURCES_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getAuthors: build.query({
            query: () => ({
                url: `${ARTICLE_AUTHORS_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getArticles: build.query({
            query: (data) => ({
                url: `${data?.paginateUrl ? data?.paginateUrl?.replace('http', 'https') : ARTICLES_ENDPOINT}${data?.paginateUrl ? data?.deferredQuery?.replace('?', '&') : data?.deferredQuery}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
    }),
    overrideExisting: false,
})

export const {useGetCategoriesQuery, useGetSourcesQuery, useGetAuthorsQuery, useGetArticlesQuery} = articleApi