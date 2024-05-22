import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
        query: (id) => `products/${id}`,
      }),
      deleteProduct: builder.mutation({
        query: (id) => ({
            url:`products/${id}`,
            method:'DELETE'
        }),
      }),
      postProduct: builder.mutation({
        query: (payload) => ({
            url:`products`,
            method:'POST',
            body:payload

        }),
      }),
  }),
})


export const { useDeleteProductMutation,useGetProductByIdQuery,usePostProductMutation,useGetProductQuery } = productApi