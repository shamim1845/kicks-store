import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product, GetProductsParams } from '@/types'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1/',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], GetProductsParams>({
            query: ({ offset = 0, limit = 8 } = {}) =>
                `products?offset=${offset}&limit=${limit}`,
        }),

        getProductById: builder.query<Product, number>({
            query: (id) => `products/${id}`,
        }),

        getRelatedProducts: builder.query<Product[], number>({
            query: (id) => `products/${id}/related`,
        }),
        getCategoryProducts: builder.query<Product[], number>({
            query: (id) => `categories/${id}/products`,
        }),
    }),
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetRelatedProductsQuery,
    useGetCategoryProductsQuery,
} = productsApi
