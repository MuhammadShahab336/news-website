import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { newsApi } from './services/api'
import authReducer from './slices/authSlice'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['api'],
}

const rootReducer = combineReducers({
    [newsApi.reducerPath]: newsApi.reducer,
    auth: authReducer,
    // auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(newsApi.middleware),
})

export const persistor = persistStore(store)
setupListeners(store.dispatch)