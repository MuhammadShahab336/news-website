import { newsApi } from './api'
import {
    ARTICLE_AUTHOR_ENDPOINT,
    ARTICLE_CATEGORY_ENDPOINT,
    ARTICLE_SOURCE_ENDPOINT,
    ARTICLES_ENDPOINT,
    CHANGE_PROFILE_ENDPOINT,
    UPDATE_PREFERENCE_ENDPOINT,
} from "./apiConstants";

const articleApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        getCategory: build.query({
            query: () => ({
                url: `${ARTICLE_CATEGORY_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getSource: build.query({
            query: () => ({
                url: `${ARTICLE_SOURCE_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getAuthor: build.query({
            query: () => ({
                url: `${ARTICLE_AUTHOR_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Article'],
        }),
        getArticles: build.query({
            query: (data) => ({
                url: `${data?.paginateUrl ? data?.paginateUrl?.replace('http', 'https') : ARTICLES_ENDPOINT}${data?.paginateUrl ? data?.query?.replace('?','&') : data?.query}`,
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

export const { useGetCategoryQuery, useGetSourceQuery, useGetAuthorQuery, useGetArticlesQuery } = articleApi