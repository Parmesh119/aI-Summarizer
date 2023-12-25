import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (header) => {
            header.set('X-RapidAPI-Key', 'a095a2501amsh82e9617579e89e3p13ef94jsn2e302d634f12')
            header.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return header
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi