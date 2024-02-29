import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),

  endpoints: (builder) => ({
    getProduct: builder.query<any, string>({
      query: () => `products`,
    }),
    getProductsDetails: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductsDetailsQuery,
} = apiRequest;
