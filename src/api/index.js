import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_BASE_URL} from "./apiConstants";

// initialize an empty api service that we'll inject endpoints into later as needed
export const newsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    endpoints: () => ({}),
})