import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {Categories, Product} from "../../types";

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
    endpoints: build => ({
        getProducts: build.query<Product[],void>({query: () => 'products'}),
        getCategory: build.query<Categories[],void>({query: () => 'products/categories'})
    }),
});
export const {useGetProductsQuery, useGetCategoryQuery} = productsApi;
