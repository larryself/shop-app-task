import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../../types';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
  endpoints: build => ({
    getProducts: build.query<Product[], void>({query: () => 'products'}),
  }),
});
export const {useGetProductsQuery} = productsApi;
