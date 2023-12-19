import {createSlice} from "@reduxjs/toolkit";
import {authApi} from "../services/authService";
import {userApi} from "../services/userService";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logout: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
                const { statusCode, data } = payload
                if (statusCode === 200) {
                    state.user = data?.user
                    state.token = data?.access_token
                    state.isAuthenticated = true
                }
            })
            .addMatcher(userApi.endpoints.getProfile.matchFulfilled, (state, { payload }) => {
                const { statusCode, data } = payload
                const user = {
                    ...state.user,
                    first_name: data?.user?.first_name,
                    last_name: data?.user?.last_name,
                    preferred_sources: data?.user?.preferred_sources,
                    preferred_categories: data?.user?.preferred_categories,
                    preferred_authors: data?.user?.preferred_authors,
                }
                if (statusCode === 200) {
                    state.user = user
                    state.isAuthenticated = true
                }
            })
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer