import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Category } from '@/types'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1/',
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => 'categories',
        }),

        getCategoryById: builder.query<Category, number>({
            query: (id) => `categories/${id}`,
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useGetCategoryByIdQuery,
} = categoriesApi
