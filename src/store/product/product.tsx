import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../../types";

export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
    endpoints: build=>({
        getProducts: build.query({query:() => 'products'
    }),
})
})
    export const {useGetProductsQuery}= productApi