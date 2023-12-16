import { newsApi } from './api'
import {LOGIN_ENDPOINT, REGISTER_ENDPOINT} from "./apiConstants";

export const authApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (credentials) => ({
                url: `${LOGIN_ENDPOINT}`,
                method: 'POST',
                body: credentials,
                headers: {
                    'Accept': 'application/json',
                },
            }),
            invalidatesTags: ['Profile'],
        }),
        register: build.mutation({
            query: (form) => ({
                url: `${REGISTER_ENDPOINT}`,
                method: 'POST',
                body: form,
                headers: {
                    'Accept': 'application/json',
                },
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useLoginMutation, useRegisterMutation } = authApi