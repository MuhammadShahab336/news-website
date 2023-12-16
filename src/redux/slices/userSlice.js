import {createSlice} from "@reduxjs/toolkit";
import {authApi} from "../services/authService";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logout: () => initialState,

    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
                const { statusCode, data } = payload
                console.log('rsd', payload)
                if (statusCode === 200) {
                    state.user = data?.user
                    state.token = data?.access_token
                    state.isAuthenticated = true
                }
            })
    },
})

export const { logout } = userSlice.actions
export default userSlice.reducer