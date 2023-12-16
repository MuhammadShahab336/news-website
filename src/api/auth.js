import { newsApi } from './index'

const authApi = newsApi.injectEndpoints({
    endpoints: (build) => ({
        example: build.query({
            query: () => 'test',
        }),
    }),
    overrideExisting: false,
})

export const { useExampleQuery } = authApi