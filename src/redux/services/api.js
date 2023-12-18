import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URL} from "./apiConstants";

const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
})

// initialize an empty api service that we'll inject endpoints into later as needed
export const newsApi = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Profile', 'Article'],

    endpoints: () => ({}),
})