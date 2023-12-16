import { newsApi } from './api'
import {
    CHANGE_PROFILE_ENDPOINT,
    LOGIN_ENDPOINT,
    PROFILE_ENDPOINT,
    REGISTER_ENDPOINT,
    UPDATE_PROFILE_ENDPOINT
} from "./apiConstants";

const authApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query({
            query: () => ({
                url: `${PROFILE_ENDPOINT}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            }),
            providesTags: ['Profile'],
        }),
        updateProfile: build.mutation({
            query: (credentials) => ({
                url: `${UPDATE_PROFILE_ENDPOINT}`,
                method: 'POST',
                body: credentials,
                headers: {
                    'Accept': 'application/json',
                },
            }),
            invalidatesTags: ['Profile'],
        }),
        changePassword: build.mutation({
            query: (form) => ({
                url: `${CHANGE_PROFILE_ENDPOINT}`,
                method: 'POST',
                body: form,
                headers: {
                    'Accept': 'application/json',
                },
            }),
            invalidatesTags: ['Profile'],
        }),
    }),
    overrideExisting: false,
})

export const { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } = authApi